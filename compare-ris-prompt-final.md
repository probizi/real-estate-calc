# RIS Prompt — Compare Real Estate Deals Calculator (v1)

You are a senior real estate financial analyst and calculator designer. Your job is to produce a **complete RIS specification** for a new real estate investment calculator.

The output of this prompt becomes the single source of truth for calculator logic — formulas, fields, thresholds, badges, scenarios. It will later be combined with a SEO Package and a Master Prompt to generate the actual Vue page.

---

## YOUR TASK

Write a RIS specification for:

```
Calculator Name:   Compare Real Estate Deals Calculator
Category:          Real Estate Investment / Deal Comparison Hub
Primary keyword:   compare real estate deals calculator
Target audience:   US real estate investors evaluating multiple opportunities — 
                   from first-time investors choosing between Rental and BRRRR, 
                   to experienced investors screening 2-3 deals per week
Traffic priority:  Priority 1 (estimated 10K-20K searches/month; unique niche 
                   with weak competition — "rental vs brrrr calculator" ~8K/mo)
```

---

## CRITICAL DISTINCTIONS TO PRESERVE

This is the **most architecturally complex calculator** in the RealCalc platform because it:

1. **Compares up to 3 different deal strategies** (Rental, Fix and Flip, BRRRR) side-by-side
2. **Normalizes** mixed strategies into a single comparable metric (5-Year Total Return)
3. **Serves as a hub-screener** — accepts imports from Rental, Fix and Flip, and BRRRR calculators via URL params
4. **Outputs categorical judgment** (Winner + Runner-Up) which requires calibrated confidence tiering to avoid false precision

Every other calculator analyzes ONE deal. Compare Deals analyzes MULTIPLE deals AND produces a ranked verdict.

### Critical rules

1. **DUAL PRIMARY metrics: 5-Year Total Return $ AND Annualized Return % (BOTH shown, Winner prioritizes Annualized)**
   - **Why dual:** Absolute Total Return obscures time-value. A $50K profit in 6 months is not equivalent to $50K over 5 years. Users need both the absolute dollar figure (intuitive, UX-friendly) AND the time-normalized rate (mathematically honest).
   - **Total Return $**: absolute 5-year dollar figure, normalized across strategies (see NORMALIZATION ENGINE)
   - **Annualized Return %**: per-mode definition — CAGR for held assets and for Flip reinvestment mode; IRR only for single-flip (one-shot) mode. See formulas below.
   - Format:
     ```
     Deal A (Rental)              Deal B (BRRRR)             Deal C (Fix and Flip, reinvestment)
     $38,450                      $62,100                    $47,800
     5-Year Total Return          5-Year Total Return        5-Year Total Return
     
     11.2% annualized             16.8% annualized           22.4% annualized
     (5Y CAGR)                    (5Y CAGR)                  (5Y CAGR, reinvestment)
     ```
     
     Alternative Flip label when single-flip mode is selected:
     ```
     Deal C (Fix and Flip, single)
     $30,000
     Flip Net Profit (6 months)
     
     63.2% annualized
     (IRR, single flip)
     ```
   - **WINNER LOGIC PRIORITIZES ANNUALIZED RETURN when deal durations or cash-flow timing differ materially** (see Winner Tiering below). This fixes the critical bias where Fix and Flip looks weaker than it is in Total Return $ alone.

   **Annualized Return formulas (v4 round 2 expert fix — strict CAGR vs IRR separation):**
   ```
   Rental / BRRRR (held through Year 5):
     Annualized Return = ((Terminal Equity + CumCashFlow) / Cash Invested)^(1/5) − 1
     Method: CAGR (Compound Annual Growth Rate) over 5 years
     UI label: "(5Y CAGR)"
   
   Fix and Flip — SINGLE FLIP mode (one-shot, short duration):
     Annualized Return = IRR of cash flows [−Cash Invested_0, 0, 0, …, Net Sale_month_H]
     Method: IRR (Internal Rate of Return) via Newton-Raphson or bisection, tolerance 0.01%
     UI label: "(IRR, single flip)"
     Note: IRR here reflects the true single-deal rate — high for 6-month flips with strong ROI
   
   Fix and Flip — REINVESTMENT mode (5-year horizon, default):
     Annualized Return = (Total Accumulated_60 / Cash Invested_0)^(1/5) − 1
     Method: CAGR over 5 years of the compounded reinvestment series
     UI label: "(5Y CAGR, reinvestment)"
     Note: This is NOT IRR. It is CAGR of the reinvestment chain. Calling this 
     "IRR" in the UI is a BUG — the two are different metrics (IRR would require 
     modeling each flip's cash flow timing separately with inter-flip gaps).
   
   Fix and Flip — REINVESTMENT WITH ROI DEGRADATION (Mode C, opt-in):
     Annualized Return = (Total Accumulated_60 / Cash Invested_0)^(1/5) − 1
     Same CAGR method, just with degraded per-flip ROI per cycle.
     UI label: "(5Y CAGR, reinvestment with ROI compression)"
   ```
   
   **CRITICAL UI RULE:** The Annualized Return label MUST match the method used. Never display "IRR" for a CAGR result. Never display "CAGR" for an IRR result. Implementers verify: if the formula includes `^(1/5) − 1`, it's CAGR; if the formula solves for rate in NPV = 0, it's IRR.

2. **SECONDARY metric: Composite Score 0-100 (weighted 6-factor)**
   - Six factors: Return (30%), Risk (20%), Liquidity (15%), Time-to-Profit (15%), Effort (10%), Scalability (10%)
   - Purpose: qualitative tie-breaker when Annualized Return is close; surface non-financial deal attributes
   - Format: `Composite Score: 78/100` with 6-factor breakdown below
   - **RETURN DOMINANCE RULE (critical)**: If the highest-Annualized-Return deal leads the runner-up by ≥25% relative (e.g., 20% vs 15% annualized = 33% relative lead), Composite Score CANNOT override it as Winner. Composite Score is used only when Annualized Returns are within 15% relative. This prevents the calculator from recommending a "safer" deal that objectively leaves significant money on the table.
   - **Weights are hardcoded** — advanced users can override in v2 (not v1)

3. **WINNER LABEL with confidence tiering (critical anti-bug)**
   - Winner determined PRIMARILY by Annualized Return (not Total Return $), with Composite Score as tie-breaker within 15% band
   - Tier 1 — **Clear Winner**: winning deal's Annualized Return exceeds runner-up by ≥5 percentage points (absolute) AND Composite Score differs by ≥10 points → display confident "Clear Winner: Deal A" badge
   - Tier 2 — **Slight Edge**: 1-5 percentage points Annualized Return difference OR <10 Composite Score difference → display cautious "Slight Edge: Deal A" badge with reasoning
   - Tier 3 — **Too Close to Call**: <1 percentage point Annualized Return difference AND <5 Composite Score difference → display neutral "Too Close to Call" badge with tie-breaker guidance
   - **RETURN DOMINANCE OVERRIDE**: If Annualized Return lead ≥25% relative, Clear Winner is forced regardless of Composite Score
   - **NEGATIVE RUNNER-UP HANDLING**: If runner-up has Annualized Return ≤ 0% OR Total Return ≤ $0, use ABSOLUTE dollar gap and absolute percentage-point gap — never relative percentage (avoids math breakdown like gap = +$20K − (−$10K) / −$10K = −300%)
   - NEVER output "Winner: Deal A" without a tier — categorical judgments require calibrated confidence

4. **MIXED STRATEGIES supported**: a single comparison can include any combination of:
   - Rental + Rental + Rental (same-strategy comparison)
   - Rental + BRRRR (classic dilemma)
   - Rental + Fix and Flip + BRRRR (full mixed comparison)
   - Fix and Flip + Fix and Flip (flipper picking between projects)
   - Any mix of 2 or 3 deals

5. **HUB-SCREENER behavior: URL param imports from other calculators**
   - URL params from Rental/Fix and Flip/BRRRR prefill Compare Deals inputs
   - Each calculator appends "Compare this deal" CTA linking to `/compare-real-estate-deals?d1=rental&d1params=...`
   - Unified import schema (see IMPORT SCHEMA below)
   - This is the strategic centerpiece — Compare is the hub where all paths converge

6. **5-year horizon is fixed in v1.**
   - All deals evaluated over 60 months
   - Fix and Flip exits at month 6-12 → assumes reinvestment into identical flip until Year 5
   - Rental runs 60 months with assumed 3% annual appreciation
   - BRRRR post-refi runs 52+ months depending on seasoning period
   - No user-configurable horizon — eliminates apples-to-oranges risk

7. **Scope is INTENTIONALLY limited in v1.**
   - Maximum 3 deals (not 5, not 10) — keeps UI clean and screen-readable
   - No IRR/NPV (discount rate is subjective, confuses non-tech users)
   - No tax modeling (pre-tax comparison only — stated clearly throughout)
   - No portfolio-level metrics (Compare Deals is per-deal-set analysis, not portfolio tool)
   - Before-tax analysis explicitly labeled in Overview, Limitations, FAQ

---

## PRIMARY METRIC — 5-YEAR TOTAL RETURN $ (NORMALIZATION ENGINE)

The normalization engine is the **mathematical core** of this calculator. It converts heterogeneous deal structures into a single comparable dollar figure.

### Universal definition

```
5-Year Total Return $ = (Cumulative Cash Flow over 60 months)
                      + (Terminal Value at month 60)
                      − (Total Cash Invested at month 0)
```

Where:
- **Cumulative Cash Flow**: sum of all positive/negative monthly cash flows over 60 months, including mid-project events (flip exits, refi events)
- **Terminal Value**: equity position at month 60 (for Rental/BRRRR held through year 5) OR accumulated cash from reinvested flips
- **Total Cash Invested**: all out-of-pocket capital required at month 0 (down payment + closing + rehab if not financed)

### Strategy-specific computation

#### A. RENTAL — Normalized Calculation

```
Inputs:
  Purchase Price P
  Down Payment % dp
  Closing % cc
  Loan Rate r_loan
  Loan Term T_loan (years)
  Monthly Rent Rent_0
  Annual Rent Growth g_rent (default 3%)
  Vacancy % vac
  Operating Expense % opex_pct (on rent)
  Annual Appreciation g_prop (default 3%)
  Selling Cost % sc (default 6%, only applied if Terminal Value computed via sale — in v1 use equity basis, not sale)

Computation:
  Cash Invested_0 = P × dp + P × cc
  
  Loan Amount = P × (1 − dp)
  Monthly Payment M = amortization(Loan Amount, r_loan, T_loan)
  
  For each month m in 1..60:
    Rent_m = Rent_0 × (1 + g_rent/12)^(m−1)
    EGI_m = Rent_m × (1 − vac)
    OpEx_m = Rent_m × opex_pct
    NOI_m = EGI_m − OpEx_m
    CashFlow_m = NOI_m − M
    CumCashFlow += CashFlow_m
  
  Property Value_60 = P × (1 + g_prop)^5
  Loan Balance_60 = amortization_balance(Loan Amount, r_loan, T_loan, 60)
  Equity_60 = Property Value_60 − Loan Balance_60
  
  5-Year Total Return = CumCashFlow + (Equity_60 − Cash Invested_0)
```

#### B. FIX AND FLIP — Normalized Calculation (with Reinvestment)

```
Inputs:
  Purchase Price P
  Rehab Budget RB
  Hold Period H (months, default 6)
  Selling Cost % sc (default 6%)
  ARV
  Financing: Hard Money (LTC 80%, Rate 12%, Points 3%)
  Monthly Holding Costs HC (taxes + insurance + utilities)

Computation:
  Cash Invested_0 = P × (1 − 0.80) + P × 0.025 (closing) + RB × (if rehab not financed) + Points
  
  HM Loan = P × 0.80 + (RB if financed)
  Monthly HM Interest = HM Loan × 0.12/12
  Total HM Interest over H = Monthly HM Interest × H
  Total Holding Cost over H = HC × H
  
  Gross Sale = ARV
  Net Sale = ARV × (1 − sc) − HM Loan Payoff − Total HM Interest − Total Holding Cost
  Flip Profit_1 = Net Sale − Cash Invested_0
  
  THREE-MODE CAPITAL DEPLOYMENT (critical — addresses flip-bias):
  
  MODE A — Reinvestment (DEFAULT, baseline assumption):
    After month H, 100% of profit + original capital is redeployed into identical next flip.
    Number of flips N in 60 months: N = floor(60 / (H + 1 month between deals))
    
    For each flip iteration n in 1..N:
      Capital_n = Capital_(n−1) + Flip Profit_(n−1)
      Flip Profit_n = Capital_n × (Flip Profit_1 / Cash Invested_0)  // ROI compounds
    
    Total Accumulated Capital_60 = Capital_0 × (1 + Flip ROI per cycle)^N
    5-Year Total Return = Total Accumulated Capital_60 − Cash Invested_0
    
  MODE B — Idle Yield Fallback (HIDDEN in v1, Advanced Settings only — v4 round 4 expert fix):
    After month H, capital sits in treasuries/HYSA at 4% annual yield until month 60.
    
    v1 UI VISIBILITY:
      - NOT visible in default UI (no toggle shown)
      - Accessible ONLY via Advanced Settings modal/panel
      - Default Flip mode is Mode A (Reinvestment) — no user toggle needed
    
    Rationale for hiding Mode B:
      In realistic user behavior, Mode B is almost never selected — flippers 
      are by definition people who reinvest into more flips. Showing Mode B 
      as an equal option in the main UI creates cognitive burden ("which mode 
      should I pick?") without providing value. Keeping it available for 
      edge cases (e.g., flipper who wants to model pause between deals) but 
      out of the primary interface is the right UX trade-off for v1.
    
    Formula (unchanged, used when opt-in via Advanced Settings):
      Idle Duration = 60 − H months
      Idle Yield Factor = (1 + 0.04)^(Idle Duration/12)
      Total Accumulated_60 = (Cash Invested_0 + Flip Profit_1) × Idle Yield Factor
      5-Year Total Return = Total Accumulated_60 − Cash Invested_0
    
    V2 ROADMAP: Consider removing Mode B entirely if usage telemetry shows 
    < 2% of Flip comparisons activate it. Simplification is preferable to 
    unused options.
  
  MODE C — Reinvestment with ROI Degradation (OPT-IN, realistic scenario — v3 round 2 fix):
    Same as Mode A, but each subsequent flip achieves 5-10% lower ROI than the previous 
    (reflects market compression, deal scarcity, and scaling friction that flippers 
    actually experience in live markets).
    
    Degradation factor d (user-selectable, default 0.07 = 7% per cycle):
      For each flip iteration n in 1..N:
        Flip ROI_n = Flip ROI_(n−1) × (1 − d)
        Capital_n = Capital_(n−1) × (1 + Flip ROI_n)
    
    Example: Flip ROI_1 = 30%; d = 0.07
      Flip 2: 27.9%
      Flip 3: 25.9%
      Flip 4: 24.1%
      (compounds less aggressively than naive Mode A)
    
    Triggered by user toggle: "Realistic: assume ROI compression over time"
    Default degradation d = 7% per cycle (can be adjusted 0-15%).
    
    Rationale: Reality check for users who understand markets. Prevents the 
    "optimistic 5-year Flip dream" from always dominating comparisons.
  
  CRITICAL CLARIFICATION:
  - Reinvestment (Mode A) is the DEFAULT baseline — this reflects how flippers actually operate in the short run.
  - Idle Yield (Mode B) is a FALLBACK scenario, not a baseline. It is optional and requires explicit user opt-in.
  - ROI Degradation (Mode C) is an advanced realistic scenario. Strongly recommended for experienced users — reflects that flip ROI compresses over time due to competition, deal scarcity, and scaling friction.
  - Earlier versions of this spec treated 4% idle yield as baseline — this was mathematically correct but strategically biased Fix and Flip Total Return downward, making the calculator systematically under-favor flips.
  - With dual-metric display (Total Return + Annualized Return), the Annualized Return for single-flip view (IRR-based) eliminates the need for 4% idle yield as a baseline — Annualized Return honestly represents the per-deal return rate without requiring an artificial 5-year extrapolation.
  
  CRITICAL FOOTNOTE (displayed on every Flip deal in Mode A):
    "Assumes 100% reinvestment into identical flips over 5 years. Actual deal 
    flow is uncertain. Flip ROI typically compresses 5-10% per cycle in 
    competitive 2026 markets due to buyer saturation and deal scarcity. 
    Toggle 'Realistic: assume ROI compression' for a more conservative 
    projection."

  EXTREME FLIP LOOP GUARD (v4 round 3 expert fix — sanity check):
    When high per-flip ROI combines with short hold periods, the compound math 
    produces unrealistic 5-year annualized returns that no real flipper sustains. 
    Example: Flip ROI 40% + Hold 4 months → 3 flips per year → effective 
    annualized return > 130%. This is mathematically valid but market-impossible 
    at sustained scale.
    
    Trigger:
      IF Flip Mode A or Mode C produces Annualized Return > 80%:
        → Display INLINE WARNING on the Flip deal card:
          ┌────────────────────────────────────────────────────────────┐
          │ ⚠ Unusually high projected flip return ({X}% annualized)   │
          │                                                            │
          │ This projection assumes very aggressive compounding        │
          │ (high per-flip ROI × short hold × uninterrupted deal flow).│
          │ Real-world flippers rarely sustain these returns at scale: │
          │  • Deal scarcity becomes a bottleneck                      │
          │  • Competition compresses ARV uplifts                      │
          │  • Rehab cost/time overruns accumulate                     │
          │                                                            │
          │ Verify inputs:                                             │
          │  • ARV assumption realistic? (use ARV Calculator)          │
          │  • Rehab budget includes all soft costs + contingency?     │
          │  • Hold period achievable given rehab scope?               │
          │                                                            │
          │ Consider toggling 'Realistic: assume ROI compression'      │
          │ (Mode C) for a more defensible projection.                 │
          └────────────────────────────────────────────────────────────┘
      
      Warning uses amber color (caution, not error — the math is valid, 
      the REAL-WORLD sustainability is questionable).
      
      WINNER TIER AUTO-DOWNGRADE (v4 round 4 expert fix — critical):
      Simply showing a warning is insufficient — users often ignore warnings 
      and the calculator continues to proclaim "CLEAR WINNER: Flip" on 
      fantasy-level returns. This damages product trust. Therefore:
      
      IF a Flip deal (Mode A or Mode C) has Annualized Return > 80% AND 
      this deal would otherwise be the Winner:
        → Winner Tier is AUTOMATICALLY DOWNGRADED one level:
            Clear Winner → Slight Edge
            Slight Edge → Too Close to Call
            Too Close to Call → (no change, already neutral)
        → Winner banner MUST include the sentence:
            "Projection depends on aggressive compounding — see warning on 
            Deal {X}. Without sustained execution at this ROI level, 
            runner-up deals may outperform."
        → If downgrade results in "Too Close to Call", no Winner is declared; 
          banner instead says:
            "High-return Flip projection cannot produce a Clear Winner — 
            verify Deal {X} inputs before drawing conclusions."
      
      IF multiple deals exceed the 80% threshold (unlikely but possible with 
      multiple flips): apply the downgrade based on the Winner candidate only. 
      Other flagged deals carry their own warnings independently.
      
      Rationale:
      The auto-downgrade makes the calculator honest about its own confidence 
      when inputs produce unrealistic projections. A soft warning that doesn't 
      affect Winner is ignored; a tier downgrade forces the user to engage 
      with the input-verification step. This is product integrity.
    
    Threshold rationale:
      80% annualized return corresponds roughly to:
        - Single-flip IRR ~80% (already flagged; typical 6-month 40% ROI)
        - Reinvestment-chain CAGR ~80% (requires per-flip ROI ~22% with 3 flips/year)
      Returns above this band are theoretically possible but extremely rare 
      in sustained practice. The warning preserves user autonomy (they can 
      still submit the comparison) but the tier downgrade ensures the 
      calculator does not endorse the projection as a confident recommendation.
```

#### C. BRRRR — Normalized Calculation

```
Inputs:
  Purchase Price P, Rehab RB, ARV, Seasoning S (months, default 6)
  Phase 1: Hard Money (LTC 80%, Rate 12%, Points 3%)
  Phase 2: Conventional Refi (LTV 75%, Rate 7.5%, Term 30y)
  Monthly Rent Rent_0, Rent Growth g_rent, Vacancy vac, OpEx opex_pct
  Appreciation g_prop

Computation:
  Cash Invested_0 = P × (1 − 0.80) + P × 0.025 + Points + (Rehab if not HM-covered) + Phase 1 Holding × S
  
  Phase 1 (months 0..S):
    Monthly HM Interest = HM Loan × 0.12/12
    Total HM Interest = Monthly HM Interest × S
    CumCashFlow_Phase1 = −Total HM Interest − Phase 1 Holding  // negative; property not renting yet
  
  Refi Event (month S):
    New Loan = ARV × 0.75
    HM Payoff = HM Loan (principal only)
    Refi Closing = New Loan × 0.025
    Refi Proceeds = New Loan − HM Payoff − Refi Closing
    Capital Recovered at Refi = Refi Proceeds (can be negative)
    
    CRITICAL DISTINCTION (v2 fix):
    Refi Proceeds are BORROWED money, NOT profit.
    - They reduce investor's net capital at risk (Capital Left in Deal)
    - They do NOT contribute to 5-Year Total Return directly
    - The corresponding New Loan obligation is offset against Property Value_60 via Equity_60 formula
    - Treating Refi Proceeds as profit double-counts the value (inflates Total Return artificially)
    
    Display in UI separately:
      "Cash Recovered at Refi: $X" (separate card, not part of Total Return)
      "Total Return: $Y" (does not include Refi Proceeds as a line item)
  
  Phase 3 (months S+1..60):
    Monthly Payment M_new = amortization(New Loan, 0.075, 30)
    For each month m in S+1..60:
      Rent_m = Rent_0 × (1 + g_rent/12)^(m−S−1)
      NOI_m = Rent_m × (1 − vac) × (1 − opex_pct)
      CashFlow_m = NOI_m − M_new
      CumCashFlow_Phase3 += CashFlow_m
  
  Property Value_60 = ARV × (1 + g_prop)^((60−S)/12)
  Loan Balance_60 = amortization_balance(New Loan, 0.075, 30, 60−S)
  Equity_60 = Property Value_60 − Loan Balance_60
  
  Capital Left in Deal = Cash Invested_0 − Refi Proceeds
  
  CORRECTED 5-Year Total Return (v2 fix — no refi double-count):
    5-Year Total Return = CumCashFlow_Phase1 + CumCashFlow_Phase3 + Equity_60 − Cash Invested_0
  
  Where Equity_60 already reflects the New Loan balance (debt from refi), so Refi Proceeds 
  are implicitly captured via reduced equity position — NOT added separately as profit.
  
  SPECIAL CASE — INFINITE CAPITAL RECOVERY:
  If Capital Left in Deal ≤ $0, the investor has recovered all capital AND still owns the asset.
  Total Return formula unchanged:
    5-Year Total Return = CumCashFlow_Phase1 + CumCashFlow_Phase3 + Equity_60 − Cash Invested_0
  But display annotates: "Infinite Return ⚡ — Capital Left $0, full recovery at refi"
  For Composite Score Return factor, this scenario scores 100 regardless of nominal Total Return.
```

### Normalization Invariant (critical consistency check)

For each deal, the following identity must hold:

```
5-Year Total Return = Cumulative Cash Flow Events + Terminal Equity/Capital − Initial Cash Invested
```

Tolerance: ±$100 for rounding. If identity fails, calculator outputs an error state and does not produce a Winner.

---

## PRIMARY METRIC — DISPLAY FORMAT

Both primary metrics must appear on every deal card. Total Return is the intuitive dollar figure; Annualized Return is the time-normalized rate that drives Winner logic.

```
Deal A (Rental)           Deal B (BRRRR)           Deal C (Fix and Flip)
$38,450                   $62,100                  $47,800
5-Year Total Return       5-Year Total Return      5-Year Total Return

11.2% annualized          16.8% annualized         22.4% annualized
(5Y CAGR)                 (5Y CAGR)                (5Y CAGR, reinvestment)

Composite Score 72/100    Composite Score 81/100   Composite Score 68/100
HIGH Confidence           HIGH Confidence          MEDIUM Confidence

                    ┌──────────────────────────────────────┐
                    │   CLEAR WINNER: Deal C               │
                    │   (Fix and Flip)                     │
                    │   22.4% vs 16.8% annualized          │
                    │   ($47,800 Total Return; leads on    │
                    │    return dominance rule)            │
                    └──────────────────────────────────────┘
```

Display rules:
- **Total Return $** and **Annualized Return %** BOTH required per deal — never omit either.
- Annualized Return label is STRICT per mode (v4 round 2 fix):
  - Rental: `(5Y CAGR)`
  - BRRRR: `(5Y CAGR)`
  - Fix and Flip reinvestment mode (default): `(5Y CAGR, reinvestment)` — NOT "IRR"
  - Fix and Flip reinvestment with ROI degradation (Mode C): `(5Y CAGR, reinvestment with ROI compression)`
  - Fix and Flip single-flip mode: `(IRR, single flip)` — the ONLY Annualized label that uses IRR
- Winner banner ALWAYS references Annualized Return as primary justification (e.g., "22.4% vs 16.8% annualized"), with Total Return $ as context only.
- All dollar amounts rounded to nearest $100 for display (internal precision ±$1).
- Annualized Return shown to 1 decimal place (e.g., `11.2%` not `11%` or `11.23%`).

### MIXED-METHOD ANNUALIZED NOTE (v4 round 3 expert fix — UX clarity)

When a comparison includes deals computed via DIFFERENT Annualized methods (IRR for single-flip vs CAGR for holds/reinvestment), the calculator must disclose this to the user. Otherwise a Flip IRR of 60% next to a Rental CAGR of 12% looks like an unfair comparison.

```
TRIGGER CONDITION:
  At least one deal uses (IRR, single flip) AND at least one deal uses (5Y CAGR) 
  or (5Y CAGR, reinvestment) in the same comparison.

DISPLAY (inline note below the Annualized Return row on all deal cards):
  "Annualized returns use different methods: IRR for single flips, CAGR for 
   multi-year holds. Comparison is normalized to annual rate but timing differs — 
   IRR reflects a single 6-month event, CAGR reflects 5-year compounding."

ADDITIONAL SAFEGUARD:
  When triggered, the Winner banner adds a second line:
    "Note: methods differ. See 'Annualized return methodology' below."
  
  An expandable "Annualized return methodology" section explains:
    - IRR (Internal Rate of Return): rate at which NPV of cash flows = 0. Best 
      for single-event deals with clear entry and exit.
    - CAGR (Compound Annual Growth Rate): ((End Value / Start Value)^(1/years)) − 1. 
      Best for multi-year holds where compounding is the return mechanism.
    - Both are valid "annual rate" metrics. They agree when the deal is a simple 
      single-period investment. They diverge when the deal has multi-period 
      compounding or mid-term cash events.

RATIONALE:
  A naive user seeing "63% IRR (single flip)" next to "22% CAGR (reinvestment)" 
  might think the single flip is 3× better than the reinvestment chain. In 
  truth, the single flip runs only 6 months, while CAGR already models 10 
  reinvested flips. These are different time-scope projections. Normalization 
  is still honest (both are per-year rates), but the note prevents naive 
  interpretation.

WHEN THE NOTE IS NOT SHOWN:
  - All deals use (5Y CAGR) or (5Y CAGR, reinvestment) — no divergence.
  - All deals use (IRR, single flip) — rare but possible if user compares two 
    hypothetical single flips.
  - Mixed with (5Y CAGR, reinvestment with ROI compression) vs plain 
    (5Y CAGR, reinvestment) — both CAGR, no divergence warning needed.
```


### UI CLARITY RULE — Winner ≠ Highest Composite Score (v4 expert fix)

When the Winner (by Annualized Return) is NOT the deal with the highest Composite 
Score, the UI must prevent user confusion — a naive reading would be "the calculator 
picked the deal with the worse score". The following rule addresses this:

```
IF Winner (highest Annualized Return after Tier logic and Cluster Check) 
   has Composite Score LOWER than another deal in the comparison:

  Display ADDITIONAL BADGE on Winner banner:
    "Highest Return, not Highest Score"
  
  Display EXPLANATION below Winner banner (2 sentences):
    "This deal wins on annualized return. Deal {Y} scores higher on Composite 
    Score due to {top factor where Y leads — e.g., Risk, Liquidity, Effort}."
  
  Rationale shown to user:
    "Composite Score is a tie-breaker within the 15% Annualized Return band. 
    When one deal leads on return by a wider margin, it takes the Winner label 
    even if another deal has a higher overall score. See the 6-factor radar 
    chart below to compare trade-offs."

WHEN THIS RULE APPLIES:
  - Winner_CS < max(CS across all deals)
  - Triggered in BOTH Clear Winner and Slight Edge tiers
  - NOT triggered in Too Close to Call or Cluster Detected tiers (no Winner label 
    in those cases)

VISUAL PLACEMENT:
  - Secondary badge appears BELOW primary Winner badge
  - Uses amber color (same as Slight Edge) to signal "important context"
  - Icon: info/asterisk symbol
  
EXAMPLE:
  ┌──────────────────────────────────────┐
  │   CLEAR WINNER: Deal A (Flip)        │
  │   22.4% vs 18.1% annualized          │
  ├──────────────────────────────────────┤
  │ ⓘ Highest Return, not Highest Score  │
  │   Deal B (Rental) scores higher on   │
  │   Composite (85 vs 72) due to lower  │
  │   execution risk and passive income. │
  └──────────────────────────────────────┘
```

This rule makes the calculator honest about trade-offs without obscuring the 
financial winner. Users who prioritize risk/effort over raw return can then 
choose Deal B with full information.

### VISUAL PRIORITY RULE — Winner Dominance (v4 round 4 expert fix)

Even with the "Highest Return, not Highest Score" badge from above, UX research 
consistently shows users infer "higher score = better deal" from visual weight 
alone — larger numbers, brighter colors, emphasis all pull attention toward 
the higher-Composite deal regardless of what the Winner banner says. This 
directly undermines the calculator's math.

The following rule enforces visual alignment with the Winner decision:

```
VISUAL PRIORITY REQUIREMENTS (all must be implemented):

1. Winner card visual dominance:
   - Highlighted border (2-3 px, strategy-family color at full saturation)
   - Elevated card shadow vs runner-up cards
   - Winner badge overlay at top-right of card
   - Primary metrics (Total Return, Annualized Return) bold and 10-15% larger 
     than non-Winner cards

2. Runner-up cards — visually neutral:
   - Standard 1px border in muted gray
   - No shadow elevation beyond baseline
   - Primary metrics at standard weight and size
   - Applies regardless of whether the runner-up has higher Composite Score

3. Composite Score color treatment:
   - Winner's Composite Score: full saturation color matching its tier (green 
     for high, amber for medium, red for low)
   - Non-Winner Composite Scores: 40-50% muted saturation
   - Non-Winner 6-factor radar: 50% opacity overlay
   
   This prevents a non-Winner with Composite 85 (green) from visually competing 
   with a Winner with Composite 72 (amber).

4. "Highest Return, not Highest Score" badge (when applicable):
   - Remains visible as explanation
   - Does NOT reverse visual priority — Winner stays visually dominant

5. Deal ordering (left-to-right):
   - Winner always in leftmost position regardless of user input order
   - Runner-up second, Third third
   - Labels clearly show input order preserved via "Deal 1 / Deal 2 / Deal 3" 
     subtitle so user can still cross-reference their inputs

Rationale:
  The Winner decision is mathematically driven by Annualized Return with calibrated 
  confidence. If the UI allows visual hierarchy to contradict this (larger 
  Composite number → "looks better"), users will second-guess the calculator 
  and mistrust the tool. Visual priority enforcement is not cosmetic — it is 
  integrity of the decision engine.

Exception — Too Close to Call / Cluster Detected:
  When NO Winner is declared, all deal cards are visually equal (matching 
  borders, equal weight). This avoids false priority when the calculator 
  explicitly says "no clear winner exists."
```

### UI CLARITY RULE — Mixed IRR + CAGR Annualization (v4 round 3 expert fix)

When a comparison contains deals using DIFFERENT annualization methods (i.e., at 
least one single-flip IRR deal alongside any 5Y CAGR deal), the Winner banner 
must display a methodology disclosure note to prevent user confusion.

```
TRIGGER CONDITION:
  Any two deals in the comparison use different Annualized Return methods:
    - IRR (single-flip mode)
    - 5Y CAGR (Rental, BRRRR, or Flip reinvestment mode)

DISPLAY (below Winner banner, above derived metrics):
  ┌──────────────────────────────────────────────────────────────┐
  │ ⓘ Mixed annualization methods in this comparison             │
  │                                                              │
  │ Annualized returns use different methods:                    │
  │ • IRR for single flips (reflects one-deal true return rate)  │
  │ • 5Y CAGR for multi-year holds and flip reinvestment chains  │
  │                                                              │
  │ Comparison is normalized to annual-rate terms, but the       │
  │ underlying cash-flow timing differs. Single flips release    │
  │ capital in 6 months; CAGR-based deals lock capital for       │
  │ 5 years. Winner logic accounts for this via time-value       │
  │ normalization.                                               │
  └──────────────────────────────────────────────────────────────┘

WHEN THIS RULE APPLIES:
  - At least one deal has Annualized Return label "(IRR, single flip)"
  - At least one other deal has label "(5Y CAGR)" or "(5Y CAGR, reinvestment)"
  - Triggered independently of Winner Tier (Clear Winner, Slight Edge, 
    Too Close to Call, Cluster Detected all show this note when applicable)

WHEN THIS RULE DOES NOT APPLY:
  - All deals use 5Y CAGR (e.g., Rental vs BRRRR, or two Flips in reinvestment mode)
  - All deals use IRR (e.g., two single-flip Flips compared)
  - Only one deal in comparison (Solo Analysis mode)

PLACEMENT:
  - Shown between Winner banner and derived metric cards
  - Uses neutral info color (blue), not warning (amber) — this is educational, 
    not an error
  - Collapsible via "Got it" button; users who understand the distinction can 
    dismiss the note for subsequent comparisons
```

Rationale: users comparing a 63% IRR single flip against a 14% CAGR rental 
frequently ask "what do these different %s actually mean?" The note answers 
this upfront, preventing confusion and increasing trust in the Winner decision.

### UI CLARITY RULE — Visual Priority for Winner (v4 round 4 expert fix)

The calculator's math declares a Winner — but the UI must REINFORCE that Winner 
visually, otherwise the math is undermined by layout. A common UX failure mode: 
the deal with the highest Composite Score looks "best" because the score is 
visually salient (large number, color coding, radar chart area), while the 
actual Winner (highest Annualized Return) appears as just another card.

This rule ensures visual hierarchy matches decision hierarchy.

```
VISUAL PRIORITY RULE — Winner deal must be VISUALLY DOMINANT regardless of 
Composite Score ranking:

CARD STYLING:
  Winner deal card:
    - Solid highlighted border (2-3px, success color: emerald/indigo)
    - Slight background tint (same hue, 5-8% opacity)
    - "WINNER" badge anchored to top-right of card
    - Primary metrics rendered in larger type (120% scale)
    - Subtle elevation shadow (box-shadow: 0 4px 12px)
  
  Runner-up and Third deal cards:
    - Neutral border (1px, muted gray)
    - No background tint
    - No "RUNNER-UP" or "THIRD" badges (not needed — position implies rank)
    - Standard type scale
    - No shadow (flat)
  
  NEVER do this:
    - Winner card looks identical to others (user cannot distinguish visually)
    - Runner-up with higher Composite Score gets any visual enhancement 
      (e.g., "Highest Score" highlight) that competes with Winner's emphasis
    - Composite Score rendered in larger type than Annualized Return (score 
      is secondary metric — must not visually dominate)

COMPOSITE SCORE VISUAL TREATMENT:
  Winner's Composite Score:
    - Full opacity, strategy-color accent
    - Displayed at standard secondary-metric size
  
  Non-Winner deals' Composite Score:
    - Muted opacity (70%) even if numerically higher
    - Same size as Winner's (don't make losing deal's score LARGER)
    - Factor breakdown (radar chart or bar) uses muted palette

WINNER BANNER PLACEMENT:
  - Placed ABOVE deal cards, spanning full width
  - Uses high-contrast color (green for Clear Winner, amber for Slight Edge, 
    neutral gray for Too Close to Call / Cluster Detected)
  - Includes Annualized Return comparison prominently ("22.4% vs 18.1%")
  - Supplementary banners ("Highest Return, not Highest Score" from earlier 
    rule; "Mixed annualization methods" when applicable) render BELOW the 
    Winner banner, never above

RATIONALE:
  Users scan visually before reading. If a non-Winner deal is visually richer 
  (bigger score, bolder color), users will perceive it as "better" regardless 
  of what the Winner banner says. This creates cognitive dissonance between 
  the math and the perception. 
  
  By enforcing visual hierarchy that matches decision hierarchy:
    • Winner card draws the eye first
    • Non-winner metrics are legible but secondary
    • User comes away with the correct takeaway
  
  This is not about hiding non-winner data — all metrics remain visible. It's 
  about making sure the visual answer matches the mathematical answer.

EXCEPTION — Too Close to Call / Cluster Detected tiers:
  When no Winner is declared, ALL deal cards use neutral styling. No card 
  gets the emerald border or "WINNER" badge. Instead:
    - Top of page shows a neutral banner: "Too Close to Call" or 
      "Cluster Detected — No Clear Winner"
    - All deal cards receive identical visual weight
    - This reflects the calibrated "no recommendation" state honestly
```

Implementation note for Vue: these rules map to CSS classes — `deal-card--winner`, 
`deal-card--neutral`, `winner-banner--clear`, `winner-banner--slight`, 
`winner-banner--tie`. The frontend framework must apply the correct class 
based on Winner tier computation; visual styling is NOT a designer's aesthetic 
choice — it's a product-integrity requirement.

---

## SECONDARY METRIC — COMPOSITE SCORE (0-100)

### 6-factor weighted breakdown

```
Composite Score = 0.30 × Return_Score 
                + 0.20 × Risk_Score 
                + 0.15 × Liquidity_Score 
                + 0.15 × TimeToProfit_Score 
                + 0.10 × Effort_Score 
                + 0.10 × Scalability_Score
```

Each factor scored 0-100 per strategy, then weighted and summed.

### Factor definitions

#### 1. Return Score (30% weight)

Relative to the deal set being compared (not absolute).

**CRITICAL (v3 round 2 expert fix):** Return_Score is based on **Annualized Return**, NOT Total Return. This aligns Composite Score with Winner logic, which is also driven by Annualized Return. Using Total Return here would create two different economies inside the same calculator — e.g., a flip with $45K / 20% annualized would get a low Return_Score (vs a rental with $55K / 10% annualized getting a high Return_Score), even though the flip is the Winner. Total Return $ remains a display/context metric only; it does NOT enter Composite Score calculations.

```
HARD FLOOR (v4 round 2 expert fix — overrides any formula result):
  IF Deal Annualized Return ≤ 0:
    Return_Score = 0
    SKIP formula computation entirely.
  
  Rationale: A deal projected to lose money over 5 years must score 0 on Return. 
  Without this hard floor, a negative-AR deal could score 20-40 via the ratio 
  formula when median is also negative (both numerator and denominator negative 
  produces a positive ratio). That would allow losing deals to contribute 
  positively to Composite Score and potentially rank above better deals — a 
  critical bug. Hard floor prevents this.

For each deal WITH Annualized Return > 0 (apply hybrid formula):

  RANK-BASED + DELTA HYBRID (v4 round 4 expert fix — stability for small-N comparisons):
  
  The pure ratio formula (50 + 50 × delta / denominator) is highly sensitive 
  to spread — in tight comparisons (e.g., 11%, 12%, 13%) it produces 
  near-identical scores (45, 50, 55); in wide comparisons (10% vs 20%) it 
  saturates at 50 vs 100. Neither behavior is user-friendly when the deal 
  set always has only 2-3 deals.
  
  The hybrid formula combines rank-based positioning (stable across spread) 
  with magnitude-based delta (rewards genuine return advantages).
  
  Step 1 — Rank Position Bonus (stable component):
    Sort deals by Annualized Return descending.
    Assign rank bonus:
      2-deal comparison:
        Top deal (rank 1):    +25
        Bottom deal (rank 2): −25
      3-deal comparison:
        Top deal (rank 1):    +25
        Middle deal (rank 2):   0
        Bottom deal (rank 3): −25
  
  Step 2 — Delta Bonus (magnitude component, capped):
    Computed from Annualized Return spread:
      max_AR = highest Annualized Return in deal set
      min_AR = lowest Annualized Return in deal set (after hard floor applied)
      spread_pp = max_AR − min_AR
    
    For each deal:
      relative_position = (Deal AR − min_AR) / max(spread_pp, 0.5)  // 0.5 pp floor
      delta_bonus = −25 + 50 × relative_position   // ranges from −25 (bottom) to +25 (top)
    
    Cap delta_bonus at ±25 to prevent it from double-counting with rank bonus.
  
  Step 3 — Combine:
    Return_Score = 50 + Rank_Bonus + Delta_Bonus
    
    Bounded: 0 ≤ Return_Score ≤ 100 (apply floor and cap after combining)

Examples demonstrating stability:

  Tight 3-deal comparison (11%, 12%, 13%):
    Ranks: 13% → +25, 12% → 0, 11% → −25
    Spread: 2 pp. For 13%: (13-11)/2 = 1.0 → Delta bonus +25
                   For 12%: (12-11)/2 = 0.5 → Delta bonus 0
                   For 11%: (11-11)/2 = 0   → Delta bonus −25
    Scores: 13% → 50+25+25 = 100; 12% → 50; 11% → 50−25−25 = 0
    (Contrast with old ratio formula: 55/50/45 — barely distinguishable)
  
  Wide 3-deal comparison (10%, 15%, 25%):
    Ranks: 25% → +25, 15% → 0, 10% → −25
    Spread: 15 pp. For 25%: (25-10)/15 = 1.0 → Delta +25
                    For 15%: (15-10)/15 = 0.33 → Delta −8
                    For 10%: 0 → Delta −25
    Scores: 25% → 100; 15% → 42; 10% → 0
    (Ratio formula was saturating; hybrid preserves ordering with middle deal correctly lower)

  2-deal tight (15%, 16%):
    Ranks: 16% → +25, 15% → −25
    Spread: 1 pp. For 16%: 1.0 → Delta +25; for 15%: 0 → Delta −25
    Scores: 16% → 100; 15% → 0
    (The full 0-100 spread is used even in tight comparisons — honest about ranking 
    while not claiming the gap is economically huge; Winner Tier logic separately 
    classifies this as "Slight Edge" given the 1 pp AR delta)

Hard floor still applies (pre-hybrid):
  IF Deal Annualized Return ≤ 0 → Return_Score = 0 (skip hybrid entirely)
  This ensures losing deals never contribute positively to Composite Score 
  regardless of rank in the set.

Example — all deals negative:
  Deal A = −3%, Deal B = −5%, Deal C = −8%
  HARD FLOOR applies to all three → all Return_Scores = 0
  (Hybrid formula not computed)

Example demonstrating alignment with Winner:
  Flip:    Total Return $45K, Annualized 20%   → Rank 1 (+25), Delta high → Score ~100
  Rental:  Total Return $55K, Annualized 10%   → Rank 2 (−25), Delta low → Score ~0
  
  Winner (by Annualized) = Flip
  Return_Score (via hybrid) = higher for Flip by a large margin
  Composite Score and Winner pull in the SAME direction with stability. ✓

V2 ROADMAP NOTE (further refinement, not required for v1):
  The hybrid above is stable and intuitive. An even more sophisticated approach 
  would be percentile ranking within the deal set:
    Return_Score = percentile rank of deal's Annualized Return × 100
  
  This eliminates the magnitude bonus entirely and relies purely on ordering. 
  For v1, the hybrid provides the right balance: rank stability plus magnitude 
  sensitivity. Switch to pure percentile in v2 only if users report the hybrid 
  overemphasizes small spreads.
```

#### 2. Risk Score (20% weight)

Strategy-based + deal-specific risk factors.

```
Strategy baseline (starting point — NOT a static floor):
  Rental:        70  (predictable cash flow, mature market)
  BRRRR:         55  (execution risk: rehab + refi + leasing)
  Fix and Flip:  40  (market timing risk, no cash flow cushion)

DYNAMIC ADJUSTMENTS (v2 fix — expanded per expert review):
These adjustments are significant enough that a "low-risk" Flip can outscore a 
"high-risk" Rental. Baseline is a starting hint, not a destination.

LEVERAGE RATIO adjustments (applies to all strategies):
  + Leverage ≤ 50% (LTV or LTC):          +15  (low risk, capital cushion)
  + Leverage 50-70%:                      +5
  + Leverage 70-80%:                      0
  + Leverage 80-90%:                      −10
  + Leverage > 90%:                       −20 (highly leveraged, vulnerable to downturn)
  Rental leverage = Loan Amount / Purchase Price
  Flip/BRRRR leverage = HM Loan / (Purchase + Rehab)
  BRRRR post-refi leverage = New Loan / ARV

DSCR adjustments (Rental and BRRRR post-refi):
  + DSCR > 1.50:                          +15
  + DSCR 1.25-1.50:                       +10
  + DSCR 1.10-1.25:                       0
  + DSCR 1.00-1.10:                       −15
  + DSCR < 1.00:                          −30 (negative cash flow, high risk)

REHAB INTENSITY adjustments (Flip and BRRRR):
  Rehab Ratio = Rehab Budget / Purchase Price
  + Rehab Ratio ≤ 10% (cosmetic):         +10
  + Rehab Ratio 10-25% (moderate):        0
  + Rehab Ratio 25-50% (substantial):     −10
  + Rehab Ratio > 50% (gut rehab):        −20 (high execution risk)

HOLD DURATION adjustments (Flip and BRRRR):
  + Flip hold ≤ 4 months:                 +5  (quick turn, less market exposure)
  + Flip hold 5-7 months:                 0   (baseline)
  + Flip hold 8-12 months:                −10 (extended market exposure)
  + Flip hold > 12 months:                −20 (renovation failure risk)
  + BRRRR seasoning ≤ 6 months:           +5
  + BRRRR seasoning 7-12 months:          0
  + BRRRR seasoning > 12 months:          −10 (capital trapped longer)

DEAL QUALITY adjustments (strategy-specific):
  + BRRRR All-In ≤ ARV × 0.75:            +10 (75% Rule passes)
  + BRRRR All-In > ARV × 0.80:            −15
  + Fix and Flip 70% Rule passes:         +10
  + Fix and Flip 70% Rule fails:          −20
  + ARV Confidence Tier LOW (imported):   −15
  + ARV Confidence Tier HIGH:             +5

MARKET CONTEXT adjustments (optional user inputs):
  + Market Days on Market > 60 days:      −10 (slow resale environment)
  + Market Rent growth < 1% (stagnant):   −5  (rental upside limited)
  + Market inventory > 6 months supply:   −10 (buyer's market, harder exit)

Floor 0, Cap 100.

EXAMPLES (showing dynamic nature):

Example A — Low-risk Flip (baseline 40, but adjusted up):
  Quick cosmetic flip in hot market: 8-week hold, 5% rehab ratio, 70% rule passes, HIGH ARV confidence
  Risk Score = 40 + 5 (quick hold) + 10 (cosmetic rehab) + 10 (70% passes) + 5 (HIGH ARV conf)
             = 70  → looks as safe as a baseline Rental

Example B — High-risk Rental (baseline 70, but adjusted down):
  Over-leveraged rental with thin margin: 90% LTV, DSCR 0.98, high vacancy market
  Risk Score = 70 − 20 (leverage) − 30 (DSCR < 1) − 10 (slow market)
             = 10  → flagged HIGH RISK despite "rental" classification
```

#### 3. Liquidity Score (15% weight)

How quickly can the investor exit and recover cash?

```
Rental:        60  (sale takes 60-90 days, transaction cost 6-8%)
BRRRR:         75  (post-refi capital already extracted; remaining equity monetizable)
Fix and Flip:  85  (designed for quick exit; shortest hold period)

Deal-specific adjustments:
  + If BRRRR Capital Left ≤ $0:          +15 (full capital recovered)
  + If BRRRR Capital Left > $20,000:     −10
  + If Rental market Days on Market > 60 days (user input): −10

Floor 0, Cap 100.
```

#### 4. Time-to-Profit Score (15% weight)

How soon does the investor see positive **operational** returns?

**CRITICAL (v4 round 3 expert fix — alignment with Operating Break-Even):** Time-to-Profit uses the SAME canonical formula as Operating Break-Even (see Metric 3 above). The previous formulation "CumCashFlow + Unrealized Equity ≥ 0" was inconsistent — it gave Rentals an artificial boost through appreciation (which is not realized cash, not liquidity, not profit realization) while Flip scored honestly via actual sale proceeds. This created a systematic bias favoring Rental in Composite Score.

```
For each deal:
  Time-to-Profit Month M = Operating Break-Even Month 
                          (the month where CumCashFlow_m ≥ 0, cash flow only)
  
  This EXCLUDES: Unrealized Equity (appreciation is paper gain, not realized)
  This EXCLUDES: Refi Proceeds (borrowed money, not operational)
  
  For Fix and Flip: M = Sale Event month (H), when Net Sale Profit applied as 
    one-shot event pushes CumCashFlow positive. Matches Metric 3 convention.
  For BRRRR post-refi: M = month where post-refi cash flow (NOI − Debt Service) 
    accumulates to cover Cash Invested net of any Capital Left.
  For Rental: M = month where cash flow (NOI − Debt Service) accumulates to 
    cover full Cash Invested. Often beyond 60 months.

Scoring (same bucket system, now applied to cash-flow-only M):
  M ≤ 3 months:        100
  M 4-6 months:        85
  M 7-12 months:       70
  M 13-24 months:      55
  M 25-36 months:      40
  M 37-60 months:      25
  M > 60 months:       10    ← typical for many Rentals under cash-flow-only rule
  M never reached:     10    (same as "> 60 months" bucket)

Typical by strategy (REVISED — no longer inflated by appreciation):
  Fix and Flip:  Score ~85 (Sale Event at month 6-7 → CumCashFlow jumps positive)
  BRRRR:         Score ~40-55 (post-refi CumCashFlow reaches positive by month 18-30)
  Rental:        Score ~10-25 (pure cash flow takes 40-80 months to cover Cash Invested;
                                 many Rentals score 10 because they never break even within 60mo)

ALTERNATIVE METRIC (informational only, NOT used in Composite Score):
  "Time to Positive Net Position (including equity)" — if users want to see when 
  their total wealth position (including unrealized appreciation) crosses zero, 
  this metric can be displayed SEPARATELY in advanced view. But it does NOT 
  feed into Time-to-Profit Score or any other Composite factor — those all use 
  the cash-flow-only Operating Break-Even.
```

**Why this matters:** A Rental with strong appreciation assumptions would previously score 40 on Time-to-Profit (equity crossing zero around month 28) while a real Flip at month 7 scored 85. Both looked "time-to-profitable" by similar order. After this fix, Flip correctly dominates on Time-to-Profit, matching economic reality — the investor actually has the money in hand at month 7.

#### 5. Effort Score (10% weight)

Investor time/attention required. Inverted — less effort = higher score.

```
Rental:        75  (passive: tenant placement + property management)
BRRRR:         35  (active: rehab management + leasing + refi coordination)
Fix and Flip:  25  (very active: rehab + sale + marketing)

Deal-specific adjustments:
  + If PM outsourced (Rental input: propertyManaged = true):    +15
  + If DIY flip (user input: selfManage = true):                 −15

Floor 0, Cap 100.
```

#### 6. Scalability Score (10% weight)

How easily the strategy replicates across a portfolio?

```
Rental:        65  (capital-intensive per door; DSCR constraints on scaling)
BRRRR:         85  (capital recycles; enables rapid scaling if execution holds)
Fix and Flip:  50  (profit reinvests but deal flow is the bottleneck)

No deal-specific adjustments in v1.
```

### Composite Score examples

```
Note: Return scores below are computed from Annualized Return (v3 round 2 fix), 
not Total Return. TimeToProfit scores below are computed from Operating Break-Even 
Month (v4 round 3 fix — cash flow only, no equity). These are illustrative scores.

Example 1 — Rental deal with strong cash flow (Annualized ~12%, Operating Break-Even ~month 48):
  Return=75, Risk=80, Liquidity=60, TimeToProfit=25, Effort=75, Scalability=65
  Composite = 0.30×75 + 0.20×80 + 0.15×60 + 0.15×25 + 0.10×75 + 0.10×65
            = 22.5 + 16 + 9 + 3.75 + 7.5 + 6.5 = 65.25 → round to 65
  (Lower TimeToProfit vs old system because cash-flow-only break-even is slower.)

Example 2 — BRRRR with Infinite Return (Annualized ~25%+, Operating Break-Even ~month 24):
  Return=90, Risk=65, Liquidity=90, TimeToProfit=55, Effort=35, Scalability=85
  Composite = 27 + 13 + 13.5 + 8.25 + 3.5 + 8.5 = 73.75 → round to 74
  (TimeToProfit unchanged — post-refi CashFlow reaches positive at month 20-24 
   regardless of equity inclusion.)

Example 3 — Fix and Flip marginal deal (Annualized ~8-10%, Operating Break-Even at month 7):
  Return=50, Risk=25, Liquidity=85, TimeToProfit=85, Effort=25, Scalability=50
  Composite = 15 + 5 + 12.75 + 12.75 + 2.5 + 5 = 53 → round to 53
  (TimeToProfit unchanged — Sale Event at month 7 remains the break-even moment.)

Aggregate effect of v4 round 3 fix:
  - Flip Composite generally UP (honest break-even + SameLogic advantage)
  - BRRRR Composite roughly unchanged
  - Rental Composite slightly DOWN (lost appreciation-driven TimeToProfit boost)
  
This aligns Composite Score with Winner logic (which uses Annualized Return) 
and prevents systematic bias against time-compressed strategies.
```

---

## WINNER LABEL with CONFIDENCE TIERING (critical anti-bug)

Do NOT output a categorical winner without calibrated confidence. Categorical judgments at low confidence levels damage user trust.

### 3-tier decision logic (Annualized Return PRIMARY)

```
Let:
  AR_1 = highest Annualized Return deal (the Winner candidate)
  AR_2 = second-highest Annualized Return deal (runner-up)
  TR_1 = Total Return of Winner candidate
  TR_2 = Total Return of runner-up
  CS_1 = Composite Score of Winner candidate
  CS_2 = Composite Score of runner-up
  
  AR_delta_pp = AR_1 − AR_2                       (absolute percentage-point delta)
  AR_delta_rel = AR_delta_pp / abs(AR_2) × 100    (relative delta, if AR_2 > 0)
  CS_delta = CS_1 − CS_2
  
  NEGATIVE RUNNER-UP GUARD (anti-bug):
    If AR_2 ≤ 0 OR TR_2 ≤ 0:
      Do NOT compute AR_delta_rel (mathematically meaningless).
      Use ONLY AR_delta_pp (absolute percentage points) for tier decision.
      Use ONLY absolute dollar gap (TR_1 − TR_2) for display.
      Example: AR_1=12%, AR_2=−3% → AR_delta_pp=15 pp (use this); skip AR_delta_rel.

STEP 0 — EXACT TIE HANDLING (v4 round 3 expert fix — Composite-only resolution):
  If AR_delta_pp = 0 (or |AR_delta_pp| < 0.1 pp — floating-point tolerance):
    Winner is determined by Composite Score ONLY.
    
    Sub-cases:
      CS_delta ≥ 10:
        → Tier = Clear Winner (via Composite dominance on equal Annualized Return)
        Display banner:
          "CLEAR WINNER: Deal {X} ({Strategy})"
          "Annualized Return is tied ({AR_1}%) — Deal {X} wins on Composite Score 
          ({CS_1} vs {CS_2}), driven by {top factor where Winner leads}"
      
      5 ≤ CS_delta < 10:
        → Tier = Slight Edge (Composite difference not decisive)
        Display banner:
          "SLIGHT EDGE: Deal {X} ({Strategy})"
          "Annualized Return is tied — Deal {X} edges ahead on Composite Score 
          ({CS_1} vs {CS_2}) but the gap is narrow"
      
      CS_delta < 5:
        → Tier = Too Close to Call (truly indistinguishable)
        Display banner:
          "TOO CLOSE TO CALL"
          "Both deals have identical Annualized Return AND statistically equivalent 
          Composite Scores. Choose based on non-financial factors (location, 
          effort preference, capital constraints)."
    
    Rationale:
      When AR is exactly tied, the Return Dominance Rule cannot apply (no dominance 
      possible at 0 pp delta) and the standard Tier logic would be indeterminate 
      (the AR_delta condition fails all three tiers). Without this STEP 0, the 
      calculator would either silently default to some tier OR produce 
      undefined behavior. Composite Score is the ONLY remaining signal and must 
      drive the decision explicitly.
    
    Interaction with other STEPs:
      STEP 0 runs BEFORE Return Dominance (STEP 1) because dominance requires 
      AR_delta_rel > 0, which is impossible at AR_delta_pp = 0.
      STEP 0 runs BEFORE Standard Tier (STEP 2) because the standard tier 
      conditions (AR_delta_pp ≥ 5 for Clear, 1-5 for Slight, <1 for Too Close) 
      would put AR_delta_pp = 0 into Too Close regardless of CS — which is 
      WRONG when Composite shows a meaningful difference.
      Cluster Check (STEP 3) runs AFTER STEP 0 on 3-deal comparisons; if the 
      top two deals tie exactly AND the third is nearby, Cluster Check can 
      still override STEP 0 to "Cluster — No Clear Winner".

STEP 1 — RETURN DOMINANCE CHECK (overrides everything else, only if AR_delta_pp > 0):
  If AR_2 > 0 AND AR_delta_rel ≥ 25%:
    Force tier = Clear Winner regardless of Composite Score.
    Rationale: a 25%+ relative lead in Annualized Return is economically decisive.
    A "safer" deal with lower return cannot be recommended as Winner when the 
    Winner-candidate's return advantage exceeds this threshold.
    
  If AR_2 ≤ 0 AND AR_delta_pp ≥ 8 (8 percentage points when runner-up negative):
    Force tier = Clear Winner.

STEP 2 — STANDARD TIER DECISION (only if Step 1 did not force Clear Winner):

  Tier 1 — CLEAR WINNER (green badge):
    Conditions:
      AR_delta_pp ≥ 5 percentage points AND CS_delta ≥ 10
    Display:
      "Clear Winner: Deal {X} ({Strategy})"
      "{AR_1 − AR_2} percentage points higher annualized return"
      "${TR_1 − TR_2} more total return over 5 years"
      "Higher score on Return, Risk, and 3+ other factors"

  Tier 2 — SLIGHT EDGE (amber badge):
    Conditions:
      (1 ≤ AR_delta_pp < 5) OR (AR_delta_pp ≥ 5 AND CS_delta < 10) 
      OR (CS_delta ≥ 10 AND AR_delta_pp < 5)
    Display:
      "Slight Edge: Deal {X} ({Strategy})"
      "{AR_delta_pp} percentage points higher annualized return"
      "Leads on return but close on Composite Score" (or reversed)
      "Consider {tie-breaker factor based on which factor differs most}"

  Tier 3 — TOO CLOSE TO CALL (neutral badge):
    Conditions:
      AR_delta_pp < 1 AND CS_delta < 5
    Display:
      "Too Close to Call"
      "Deals are within statistical noise — choose based on non-financial factors"
      "Suggested tie-breakers: Location preference, property management availability, 
       exit timing flexibility, financing source"

STEP 3 — CLUSTER CHECK (v4 expert fix — prevents false precision in 3-deal comparisons):

  When 3 deals are present, a 2-deal check (AR_1 vs AR_2) can produce a "Clear 
  Winner" or "Slight Edge" label even when AR_3 is very close to AR_2 — meaning 
  the runner-up is not actually distinguishable from the third deal. This creates 
  false precision: the UI says "Deal A wins", but functionally A, B, and C form 
  a cluster.
  
  Let:
    AR_3 = third-highest Annualized Return
    CS_3 = Composite Score of third-highest AR deal
    
  Check:
    IF 3 deals are present
    AND abs(AR_1 − AR_3) < 2 percentage points
    AND max(CS_1, CS_2, CS_3) − min(CS_1, CS_2, CS_3) < 10 points
    → OVERRIDE previous tier to "Too Close to Call"
    → Display: "Cluster detected: all three deals are within statistical noise"
    → Display: "No deal has a meaningful advantage. Choose based on non-financial 
       factors (location, effort preference, capital constraints)."
    → Override label: "CLUSTER — No Clear Winner"
  
  Rationale:
    When three deals land within a 2 percentage-point band on Annualized Return 
    AND a 10-point band on Composite Score, the calculator cannot honestly 
    discriminate between them. Claiming "Deal A wins" in this scenario would be 
    false precision. The calibrated answer is: "no deal stands out."
  
  Scope:
    Cluster Check runs ONLY when 3 deals are present.
    For 2-deal comparisons, the standard Tier 1/2/3 logic is complete.
  
  Interaction with Return Dominance Rule (STEP 1):
    Return Dominance overrides Cluster Check. If AR_1 leads AR_2 by ≥25% relative 
    (or ≥8 pp absolute when AR_2 ≤ 0), Clear Winner is forced regardless of how 
    close AR_2 and AR_3 are. Dominance means AR_1 is so far ahead that the 
    runner-up cluster is irrelevant.
```

### Why Annualized Return drives Winner (not Total Return $)

Total Return $ is the user-facing absolute figure, but time-value bias makes it unsuitable as the 
decision driver. Example:
  Deal A (Flip, 6 months): Total Return $45K, Annualized 18%
  Deal B (Rental, 5 years): Total Return $52K, Annualized 9%

Winner by Total Return $: Deal B ($52K > $45K)
Winner by Annualized Return: Deal A (18% > 9%)

The Annualized Return-based Winner is correct: Deal A's capital is freed at month 6 and can be 
redeployed, making its time-adjusted return superior. The user may still prefer Deal B for 
qualitative reasons (passive income, lower execution risk), but the financial mathematics favor A. 
The calculator must not obscure this by using Total Return $ as the tiebreaker.

### Edge cases

```
Negative Total Returns:
  If all deals have negative Total Return → display "All deals projected to lose money over 5 years"
  Still compute Winner (least-negative) but add cautionary banner

Missing deals:
  If only 1 deal entered → calculator shows single-deal analysis (no Winner)
  If 2 deals → standard comparison
  If 3 deals → show full 3-way ranking: Winner, Runner-Up, Third

DSCR < 1.00 on any Rental/BRRRR deal:
  Automatic warning banner: "Deal X has negative post-debt cash flow. 
  Total Return relies on appreciation assumptions which are not guaranteed."

Reinvestment assumption warning (Fix and Flip):
  Always displayed below Fix and Flip Total Return:
  "This figure assumes 100% reinvestment into identical flips over 5 years. 
   Actual deal flow is uncertain."
```

---

## IMPORT SCHEMA (hub-screener core feature)

Compare Deals accepts URL params from other calculators. This is the strategic centerpiece.

### Unified parameter schema

Each deal slot (1, 2, 3) carries a `d{N}_type` parameter followed by strategy-specific fields.

```
Base URL:  https://realcalc.com/compare-real-estate-deals

Global params (v2 expert fix — apply to all deals by default):
  g_ga     = Global Annual Appreciation % (default 3%)
  g_gr     = Global Annual Rent Growth % (default 3%)
  g_adv    = Advanced mode toggle (1 = per-deal override enabled, 0 = global only)

Deal slot N (N = 1, 2, 3):
  d{N}_type     ∈ {rental, flip, brrrr, empty}
  d{N}_label    = Custom deal name (optional, default "Deal {N}")

Rental params (when d{N}_type=rental):
  d{N}_p   = Purchase Price
  d{N}_dp  = Down Payment %
  d{N}_cc  = Closing Cost %
  d{N}_lr  = Loan Rate %
  d{N}_lt  = Loan Term years
  d{N}_r   = Monthly Rent
  d{N}_vc  = Vacancy %
  d{N}_op  = OpEx % of rent
  d{N}_gr  = Rent Growth % (per-deal override; active ONLY when g_adv=1)
  d{N}_ga  = Annual Appreciation % (per-deal override; active ONLY when g_adv=1)

Fix and Flip params (when d{N}_type=flip):
  d{N}_p   = Purchase Price
  d{N}_rb  = Rehab Budget
  d{N}_h   = Hold Period months
  d{N}_sc  = Selling Cost %
  d{N}_arv = ARV
  d{N}_hc  = Monthly Holding Costs
  d{N}_hmr = HM Rate %
  d{N}_hpt = HM Points %

BRRRR params (when d{N}_type=brrrr):
  d{N}_p   = Purchase Price
  d{N}_rb  = Rehab Budget
  d{N}_arv = ARV
  d{N}_s   = Seasoning months
  d{N}_hmr = HM Rate %
  d{N}_rlt = Refi LTV %
  d{N}_rir = Refi Rate %
  d{N}_r   = Monthly Rent
  d{N}_vc  = Vacancy %
  d{N}_op  = OpEx % of rent
  d{N}_gr  = Rent Growth % (per-deal override; active ONLY when g_adv=1)
  d{N}_ga  = Annual Appreciation % (per-deal override; active ONLY when g_adv=1)
```

### Global vs Per-Deal Appreciation — URL handling rules

```
Default behavior (g_adv=0 or missing):
  - Use g_ga and g_gr values for ALL deals.
  - Ignore d{N}_ga and d{N}_gr even if present in URL.
  - Do NOT show per-deal Appreciation / Rent Growth fields in UI.

Advanced mode (g_adv=1):
  - Display Market Assumptions panel at top with g_ga / g_gr defaults.
  - Display per-deal Appreciation / Rent Growth fields in each deal card.
  - Show WARNING banner: "You are using different market assumptions across 
    deals. This may produce biased results — verify assumptions reflect 
    actual market data."

Auto-detection from URL imports (when g_adv not explicitly set):
  - If all d{N}_ga values identical (or absent) → collapse to global, set g_adv=0.
  - If d{N}_ga values differ across deals → activate advanced mode (g_adv=1), 
    show warning banner.

This prevents accidental bias when users import deals from different sources.
```

### Import flow from each source calculator

```
Rental Property Calculator:
  "Compare with another deal" CTA link:
  /compare-real-estate-deals?d1_type=rental&d1_p=250000&d1_dp=25&d1_cc=2.5&d1_lr=7.5&...

Fix and Flip Calculator:
  "Compare with another deal" CTA link:
  /compare-real-estate-deals?d1_type=flip&d1_p=150000&d1_rb=40000&d1_h=6&d1_arv=240000&...

BRRRR Calculator:
  "Compare with another deal" CTA link:
  /compare-real-estate-deals?d1_type=brrrr&d1_p=120000&d1_rb=35000&d1_arv=195000&d1_s=6&...

ARV Calculator:
  Special — ARV is not a deal, it's a valuation. But Compare Deals Mode 3 (Deal Screening)
  accepts ARV output as a validation input:
  /compare-real-estate-deals?mode=screening&arv=280000&arv_confidence=HIGH
```

### Graceful degradation

```
If URL params are incomplete or malformed:
  Fill what's provided, leave remaining fields at empty state
  Show inline hint: "Complete remaining fields to run comparison"

If d{N}_type is missing but other d{N}_* params present:
  Attempt inference from param set (if p + rb + arv present → flip or brrrr — ask user to clarify)

If URL exceeds browser limits (~2000 chars):
  Strip optional params (rent growth, appreciation) and use defaults
  Show notification "Some advanced parameters were reset to defaults"
```

### TYPE VALIDATION (v4 round 2 expert fix — prevents cross-strategy param bleed)

When URL params are inconsistent with the declared `d{N}_type`, the calculator must silently drop the conflicting params and warn the user. This prevents corrupted imports from producing false results.

```
Per-strategy allowed param sets:

Rental (d{N}_type=rental):
  ALLOWED:  d{N}_p, d{N}_dp, d{N}_cc, d{N}_lr, d{N}_lt, d{N}_r, d{N}_vc, 
            d{N}_op, d{N}_gr, d{N}_ga
  IGNORED:  d{N}_rb, d{N}_arv, d{N}_h, d{N}_sc, d{N}_hc, d{N}_hmr, d{N}_hpt, 
            d{N}_s, d{N}_rlt, d{N}_rir

Fix and Flip (d{N}_type=flip):
  ALLOWED:  d{N}_p, d{N}_rb, d{N}_h, d{N}_sc, d{N}_arv, d{N}_hc, d{N}_hmr, d{N}_hpt
  IGNORED:  d{N}_dp, d{N}_cc, d{N}_lr, d{N}_lt, d{N}_r, d{N}_vc, d{N}_op, 
            d{N}_gr, d{N}_ga, d{N}_s, d{N}_rlt, d{N}_rir

BRRRR (d{N}_type=brrrr):
  ALLOWED:  d{N}_p, d{N}_rb, d{N}_arv, d{N}_s, d{N}_hmr, d{N}_rlt, d{N}_rir, 
            d{N}_r, d{N}_vc, d{N}_op, d{N}_gr, d{N}_ga
  IGNORED:  d{N}_dp, d{N}_cc, d{N}_lr, d{N}_lt, d{N}_h, d{N}_sc, d{N}_hc, d{N}_hpt

Validation procedure:
  1. Parse d{N}_type (if missing, fall back to inference — see Graceful degradation).
  2. Filter incoming params against ALLOWED set for declared type.
  3. Collect list of IGNORED-but-present params.
  4. If list is non-empty:
     - Silently drop the conflicting params (do NOT use their values).
     - Display WARNING banner at top of calculator:
       "Some imported parameters do not match the selected strategy for Deal {N} 
        and were ignored: {list of ignored param names, e.g., 'rehab_budget, arv'}.
        If this is incorrect, review the strategy selector for Deal {N}."

Examples:

Input URL: d1_type=rental&d1_p=200000&d1_rb=40000&d1_arv=260000
  d1_rb and d1_arv are NOT in Rental's ALLOWED set.
  → Drop both. Warn: "Deal 1 imported as Rental but received rehab_budget and arv 
     parameters — ignored. If this deal is a flip or BRRRR, change the strategy."

Input URL: d1_type=flip&d1_p=150000&d1_rb=40000&d1_r=1800&d1_vc=8
  d1_r and d1_vc are NOT in Flip's ALLOWED set (flips have no monthly rent).
  → Drop both. Warn: "Deal 1 imported as Fix and Flip but received monthly_rent 
     and vacancy parameters — ignored. Flips do not produce rental income."

Input URL: d1_type=brrrr&d1_p=140000&d1_lr=7.5 (wrong: should be d1_rir)
  d1_lr is NOT in BRRRR's ALLOWED set.
  → Drop. Warn: "Deal 1 imported as BRRRR but received loan_rate parameter — 
     ignored. For BRRRR, use refi_rate (d1_rir) instead of loan_rate (d1_lr)."

Edge case — type is missing (rare, handled by inference):
  If d{N}_type is absent but only Rental-specific params are present → infer 'rental'.
  If d{N}_type is absent and conflicting params from multiple strategies present 
  → DO NOT infer; show user prompt: "Deal {N} strategy cannot be determined 
     from imported parameters. Please select a strategy."
```

**Rationale:** Users sometimes construct URLs manually or copy from an older calculator version. Silent cross-strategy param bleed would cause wrong calculations without any user-visible signal. Explicit drop + warn makes the problem diagnosable.

---

## 3 CALCULATOR MODES

### Mode 1 — Compare Deals (default)

Forward calculation. Input 2-3 deals, output normalized 5-Year Total Return + Composite Score + Winner.

```
Color family: indigo
Primary input: 2-3 deal cards with strategy selector + strategy-specific fields
Output:
  - Side-by-side Total Return comparison
  - Side-by-side Composite Score with 6-factor radar chart
  - Winner badge with confidence tier
  - 60-month Cumulative Cash Flow chart (all deals overlaid)
  - Deal-level breakdown tables (all metrics per deal)
```

### Mode 2 — Find Break-Even (reverse)

"What would it take for Deal A to match Deal B?" Binary search on a single pivot variable.

```
Color family: blue
User selects:
  - Which deal is the "target" (deal to match)
  - Which deal to adjust (deal to find break-even for)
  - Pivot variable (Purchase Price, Rent, ARV, Rehab, or Appreciation Rate)

Binary search:
  - Bounds: ±50% of current pivot value
  - Target: Total Return of adjusted deal = Total Return of target deal (±$500)
  - Max 100 iterations
  - Returns: required pivot value OR null + "Break-even not achievable within ±50% bounds"

Display:
  "Deal A would need Purchase Price = $142,000 (currently $150,000) to match Deal B's Total Return"
  Sensitivity note: "This assumes all other variables unchanged."
```

### Mode 3 — Deal Screening (filter)

Set investment criteria, evaluate which deals pass.

```
Color family: emerald
User defines screening criteria:
  - Minimum 5-Year Total Return $
  - Minimum Composite Score
  - Maximum Initial Cash Invested
  - Required Risk Score minimum

Each deal evaluated:
  - PASS (all criteria met) — green check
  - CONDITIONAL (3+ criteria met, 1 miss) — amber warning
  - FAIL (2+ criteria missed) — red X

Output:
  - Table with PASS/CONDITIONAL/FAIL per deal
  - Explanation of which criteria each deal failed
  - Optional: "Show recommended adjustments to make FAIL deals pass"
```
---

## 4 DERIVED METRIC CARDS (shown in Mode 1 for each deal)

Displayed below primary 5-Year Total Return per deal. Consistent across strategies.

### Metric 1 — Initial Cash Invested $

```
Rental:        Down Payment + Closing Costs
Fix and Flip:  Down Payment (HM) + Closing + Rehab (if not financed) + Points
BRRRR:         Down Payment (HM) + Closing + Rehab (if not financed) + Points + Phase 1 Holding × Seasoning
```

Display: `$42,500 cash required`

### Metric 2 — Year 1 Cash-on-Cash %

```
Rental:        (12 × CashFlow_month1_avg) / Cash Invested × 100
Fix and Flip:  N/A (no cash flow; display "Flip Profit % instead")
BRRRR:         Post-refi CoC = Year 1 Cash Flow / Capital Left in Deal × 100
                                (use Infinite Return logic if Capital Left ≤ $0)
```

Display: `8.4% Year 1 CoC` (or `Flip Profit: 42%` for flips, or `Infinite Return ⚡` for BRRRR)

### Metric 3 — Break-Even Month (Time-to-Profit)

**╔══════════════════════════════════════════════════════════════════════════╗
║ SOURCE OF TRUTH — BREAK-EVEN (v4 round 4 expert fix)                     ║
║                                                                          ║
║ Operating Break-Even is defined ONLY once — in this section (Metric 3). ║
║ All other references in this spec (Time-to-Profit Score, Critical Rule  ║
║ 11, labels, tooltips, UI copy, Vue implementation) MUST reuse the       ║
║ definition from this section verbatim.                                  ║
║                                                                          ║
║ Sections that reference Break-Even are DESCRIPTIVE ONLY and must NOT    ║
║ redefine the formula. If a formula appears outside this section, THAT   ║
║ IS A BUG and must be corrected to either remove the duplicate formula   ║
║ or replace it with a pointer back to Metric 3.                          ║
║                                                                          ║
║ Canonical naming:                                                        ║
║   "Operating Break-Even"   (primary, all strategies)                    ║
║   "Financial Break-Even"   (secondary, BRRRR only — via refi proceeds)  ║
║                                                                          ║
║ Forbidden synonyms (drift risk):                                         ║
║   "Capital Recovery Break-Even", "Cash Recovery Break-Even",             ║
║   "Cash Break-Even", "Profit Break-Even", "Investment Break-Even"       ║
║                                                                          ║
║ Implementation contract:                                                 ║
║   Vue implementation must compute Break-Even using the canonical        ║
║   formula below. If the Vue variable is named differently, it must map  ║
║   to exactly this formula — no alternate computations permitted.        ║
╚══════════════════════════════════════════════════════════════════════════╝**

Break-even is split into TWO measurements to avoid false-positive BRRRR signals where refi cash creates apparent "break-even" without actual profitability.

**CRITICAL (v4 round 2 expert fix): Operating Break-Even uses cash flow ONLY — no equity, no refi, no sale proceeds. This is the single canonical definition used everywhere in this spec. Previous versions had a conflicting "CumCashFlow + Unrealized Equity − Cash Invested" formulation — that is NOW REMOVED. Using equity in the break-even formula inflates Rental break-even (appreciation does the heavy lifting) and distorts cross-strategy comparison.**

```
OPERATING BREAK-EVEN (primary display):
  Month M where CumCashFlow_m ≥ 0
  
  Where CumCashFlow_m = sum of monthly operating cash flows from month 1 to M
  
  EXCLUDES: Unrealized Equity (appreciation is not realized cash)
  EXCLUDES: Refi Proceeds (borrowed money, not operating profit)
  EXCLUDES: Sale Proceeds (terminal event, not operational income)
  
  For Fix and Flip: CumCashFlow is negative throughout hold period (holding costs 
  accumulate), then jumps positive at sale event (Net Sale Profit applied as a 
  one-shot event at month H). Operating Break-Even = month H when Net Sale 
  Profit ≥ Cumulative Holding + Interest + Cash Invested.
  
  This is the HONEST measure of when the deal starts making money from operations.

FINANCIAL BREAK-EVEN (secondary display, BRRRR only):
  Month M where investor's CUMULATIVE CASH POSITION first ≥ 0
  
  Includes Refi Proceeds as a cash event at seasoning month S.
  
  Formula: CumCashFlow_m + (Refi Proceeds if m ≥ S) − Cash Invested_0 ≥ 0
  
  Shows when the investor "has their money back" — useful for capital recovery 
  planning. Still excludes Unrealized Equity.
  
  A BRRRR can have Financial Break-even at month 6 (via refi) but Operating 
  Break-even at month 24 — both are true, both are meaningful, both should 
  be displayed.

NEVER use:
  ❌ CumCashFlow + Unrealized Equity − Cash Invested  (inflates break-even; 
                                                        appreciation is not cash)
  ❌ "Cumulative position" without explicit exclusion list  (ambiguous)
```

Typical values (using canonical cash-flow-only definition):
```
Rental:        Operating Break-even ~30-60+ months (pure cash flow accumulation 
                                                     against Cash Invested is slow)
Fix and Flip:  Operating Break-even ~6-9 months (at flip exit when Net Sale Profit 
                                                  exceeds accumulated holding costs)
BRRRR:         Operating Break-even ~18-30 months (post-refi positive CashFlow 
                                                    accumulates to cover Cash Invested)
               Financial Break-even ~6 months (when refi proceeds arrive)
```

Display format:
```
Rental deal:      "Operating Break-even: Month 42"
Flip deal:        "Operating Break-even: Month 7 (Sale Event — not recurring operational cash flow)"
BRRRR deal:       "Operating Break-even: Month 22
                   Financial Break-even: Month 6 (refi event)"
```

**Note on Rental break-even realism:** With the cash-flow-only definition, many Rentals will show Operating Break-even beyond month 60 (the 5-year horizon). This is mathematically correct — pure cash flow takes 7-15 years to pay back a 20-25% down payment. The UI should display "Beyond 60 months" or "Not reached in 5-year horizon" when appropriate, not omit the metric.

### Metric 4 — Risk Flag Summary

```
Computed from Risk Score factors:
  LOW RISK:      Risk Score ≥ 75 (green badge)
  MODERATE:      Risk Score 50-74 (amber badge)
  HIGH RISK:     Risk Score < 50 (red badge + auto-generated warning text)

Auto-generated warnings (if applicable):
  "DSCR below 1.00 — negative monthly cash flow"
  "All-In Cost exceeds 80% of ARV — thin margin"
  "70% Rule fails — acquisition price too high"
  "No cash flow cushion — relies on sale timing"
```

Display: `MODERATE RISK: DSCR 1.05 (narrow cushion)`

---

## CRITICAL METHODOLOGICAL RULES

### 1. ALWAYS check Normalization Invariant per deal

Before any Winner is computed, verify for each deal:

```
abs(5-Year Total Return − (CumCashFlow + Terminal Equity − Cash Invested)) ≤ $100
```

If fails, deal is marked INVALID and excluded from comparison. Banner: 
`"Deal X has a calculation inconsistency. Please verify inputs."`

### 2. NEVER mix pre-tax and post-tax figures

All calculations are pre-tax. This MUST be stated in:
- Overview P4
- How to Use Step 5
- Each deal card (small footnote)
- Limitations
- FAQ (dedicated question)

### 3. ARV import from ARV Calculator requires Confidence Tier pass-through

If a deal imports ARV from the ARV calculator:
- ARV value fills deal.arv
- ARV Confidence Tier (HIGH/MEDIUM/LOW) adjusts that deal's Risk Score
- LOW confidence → auto-flag: `"ARV estimate has LOW confidence. Total Return is highly sensitive to this input."`

### 4. Reinvestment assumption must be explicit

For every Fix and Flip deal, the 5-Year Total Return banner must include:
`"Assumes 100% reinvestment into identical flips over 5 years. 
  Deal flow and ROI sustainability are not modeled."`

### 5. Winner tier must never be bypassed

Even with explicit user request, the calculator does not output "Winner: Deal A" without the confidence tier. The three tiers (Clear Winner / Slight Edge / Too Close to Call) are the ONLY acceptable verdicts.

### 6. At least 2 deals must be entered for comparison

Single-deal input → calculator operates in "Solo Deal Analysis" mode — shows metrics for that deal only, no Winner. Banner: `"Add at least one more deal to run a comparison."`

### 7. Consistency with source calculators

If a deal's inputs match a known source calculator (via URL import), Compare Deals' intermediate metrics (Cap Rate, CoC, DSCR, etc.) MUST match the source calculator's outputs exactly (tolerance ±$1 or ±0.1%). Periodic cross-checks required.

### 8. Terminal Value uses EQUITY basis, not sale

In v1, Terminal Value at month 60 = Property Value × Appreciation − Loan Balance at month 60. This is the **unrealized equity** position. We do NOT assume a sale occurs at month 60, so no selling costs are deducted. This is the industry convention for 5-year hold projections (BiggerPockets, DealCheck).

If user wants "sale-basis" scenario: out of scope for v1. Note in Limitations.

### 9. Refi Proceeds MUST be displayed separately from profit (BRRRR specific)

Refi proceeds are BORROWED money against appreciated property value — not earned profit. Treating refi proceeds as profit would double-count the value (the corresponding New Loan is already offset in Equity_60).

**UI requirement:**
```
BRRRR deal card must show TWO distinct lines:
  5-Year Total Return:     $62,100   (true economic profit)
  Cash Recovered at Refi:  $18,500   (capital extracted via refinance, separate from profit)
  
Cash Recovered at Refi is an informational number — it does NOT add to Total Return,
and it does NOT contribute to Composite Score Return factor (to avoid double-scoring).
```

**Common user confusion:** "My BRRRR refi gave me $18K cash — is that profit?" Answer: No, it's your own equity, loaned back to you via the new mortgage. The underlying profit is in the long-term Total Return metric, not the refi event.

### 10. Risk Score must adjust DYNAMICALLY per deal (not just strategy baseline)

**SINGLE SOURCE OF TRUTH (v4 round 2 expert fix — dedup):** The full Risk Score methodology — strategy baselines, leverage/DSCR/rehab intensity/hold duration adjustments, deal quality modifiers, market context — is defined in ONE canonical location: the "Risk Score (20% weight)" section under Composite Score (see Section 2 of COMPOSITE SCORE block above).

Implementation must strictly follow the Risk Score section above. Do NOT restate baselines or adjustment values in this block — restating creates drift risk. When implementing, refer ONLY to the canonical Risk Score definition; this Critical Rule is a pointer, not a specification.

**Key property (summary only, no numbers):** Risk Score is not a static strategy-level floor — a highly-leveraged Rental with thin DSCR can score LOWER than a well-bought Flip with fast turnover. Strategy baselines are starting hints; deal-specific factors can swing the score by 30-50 points in either direction. See canonical Risk Score block for exact adjustment values.

### 11. Break-Even Month — Interpretation Guidance (v4 round 3 expert fix — dedup)

**SINGLE SOURCE OF TRUTH RULE:** Break-Even Month definitions, formulas, and edge cases are defined EXCLUSIVELY in **Metric 3 — Break-Even Month (Time-to-Profit)** under the "4 DERIVED METRIC CARDS" section above. This Critical Rule does NOT restate formulas — it provides interpretation and implementation guidance only.

Implementers: consult Metric 3 for the canonical definitions. If this section ever appears to contradict Metric 3, **Metric 3 is authoritative**.

**Interpretation summary (NOT specification):**

The calculator displays two break-even metrics per deal card:

- **Operating Break-Even Month** (primary) — pure operational profitability. Honest measure of when the deal starts paying back Cash Invested from operations alone (rent minus expenses minus debt service). See Metric 3 for the canonical formula.

- **Financial Break-Even Month** (secondary, BRRRR only) — capital recovery via refi event. Shows when the investor "has their money back" through refinance proceeds. Not applicable to Rental or Flip deals in Mode 1 (no refi event).

**Why both must display for BRRRR:**
Using only Financial Break-Even makes BRRRR look artificially fast — the "break-even" is from borrowed money, not earned profit. Using only Operating Break-Even makes BRRRR look artificially slow — ignoring the real capital recovery that happens at the refi event. Both numbers are true; both are meaningful; displaying both is honest.

**Terminology consistency:**
- Use "Financial Break-Even" (matches Metric 3). Do NOT use synonyms like "Capital Recovery Break-Even" or "Cash Recovery Break-Even" — these create drift with Metric 3 naming.
- For Fix and Flip: Operating Break-Even occurs at the SALE EVENT; label must include "(Sale Event — not recurring operational cash flow)". Flips have no Financial Break-Even (no refi event).

**Implementation contract:**
If the Vue implementation calls these metrics by different names, or computes them with different formulas, THAT IS A BUG — re-read Metric 3 and align.

**UI requirement per deal card:**
```
Rental:
  Operating Break-Even:   Month 42   (cash flow pays back Cash Invested)
  Financial Break-Even:   N/A         (no refi event — use Operating Break-Even)

BRRRR:
  Operating Break-Even:   Month 22   (post-refi cash flow covers Capital Left)
  Financial Break-Even:   Month 6    (via refi proceeds — borrowed money, not profit)

Fix and Flip:
  Operating Break-Even:   Month 7    (Sale Event — not recurring operational cash flow)
  Financial Break-Even:   N/A         (no refi event — Sale Event is captured in Operating)
```

**Labeling requirement (v3 round 2 fix):** For Fix and Flip deals, the Operating Break-Even line MUST include the parenthetical "(Sale Event — not recurring operational cash flow)" to prevent user confusion. A flip never produces ongoing cash flow — the "break-even" is the sale, which is a one-shot liquidity event.

**Naming enforcement (v4 round 3 fix):** Use "Financial Break-Even" consistently. "Capital Recovery Break-Even", "Cash Recovery Break-Even", or similar synonyms create drift between spec and implementation. Metric 3 is the single source of truth for naming.

### 12. Appreciation and Rent Growth are GLOBAL by default (v2 expert fix)

To prevent biased comparisons, macro-market assumptions apply uniformly across all deals in a comparison:

```
GLOBAL SCOPE (default behavior in v1):
  Annual Appreciation %:     applied to ALL deals in the comparison (default 3%)
  Annual Rent Growth %:      applied to ALL Rental and BRRRR deals (default 3%)

RATIONALE:
  These are macro-market assumptions about the investor's chosen market, not 
  deal-specific inputs. Letting users set Deal A at 5% appreciation and Deal B 
  at 2% produces systematically biased comparisons — typically the user's 
  "preferred" deal gets the better number without realizing they've rigged 
  the comparison.

PER-DEAL OVERRIDE (advanced mode only):
  Users MAY override per-deal in advanced mode IF:
    - Deals are in materially different markets (e.g., Austin TX vs Cleveland OH)
    - User explicitly acknowledges they are modeling different markets
  
  When override is active:
    Display WARNING banner: "You are using different macro assumptions across 
    deals. This may produce biased results — verify assumptions reflect actual 
    market data, not preference."
    
    Display a warning icon on affected deal cards.

UI behavior:
  Default: single "Market Assumptions" panel at top of calculator with 
    Appreciation % and Rent Growth %. These values flow into all deal cards.
  
  Advanced toggle: "Use different market assumptions per deal" → enables 
    per-deal fields with warning banner shown above.

SCENARIO APPLICATION:
  Conservative/Base/Optimistic scenarios adjust the GLOBAL values.
  Per-deal overrides (if active) are adjusted by the same delta uniformly.

URL IMPORT BEHAVIOR:
  URL params d{N}_ga and d{N}_gr populate per-deal fields.
  If all imported deals share identical values → collapse to global automatically.
  If different values → activate advanced mode with warning.
```

### 13. Terminal Value — equity basis, no selling costs (hold consistency rule)

For Rental and BRRRR deals at month 60, Terminal Value is UNREALIZED EQUITY. No sale is assumed, so NO selling costs (6-8% agent fees, closing, concessions) are deducted.

```
FORMULA (for hold deals):
  Property Value_60 = Initial Value × (1 + appreciation)^5
  Loan Balance_60 = amortization_balance at month 60
  Terminal Value = Property Value_60 − Loan Balance_60

DO NOT apply:
  Terminal Value ≠ (Property Value × (1 − 0.06)) − Loan Balance   ← WRONG
  Terminal Value ≠ Net Sale Proceeds                              ← WRONG

CROSS-CUT REQUIREMENT:
  SEO content, FAQ, Limitations, and the final Vue implementation MUST maintain 
  this convention. Any appearance of "× 0.94" or "− 6% selling cost" on a 
  month-60 Rental/BRRRR terminal value is a BUG. Selling costs apply only to 
  Fix and Flip (which actually sells at month H).

WHY:
  5-year hold deals project an ongoing investment, not a planned exit. Selling 
  costs should only be modeled when the user explicitly plans a sale. This is 
  industry convention (BiggerPockets, DealCheck, Roofstock).
  
  If user wants "sale-basis" terminal value → out of scope for v1 (note in 
  Limitations and v2 roadmap).
```

---

## INPUTS & OUTPUTS TABLE

### Inputs

#### Global inputs (apply to all deals in comparison — v2 expert fix)

| Input                    | Applies To     | Default     | Source                                      |
|--------------------------|----------------|-------------|---------------------------------------------|
| Annual Appreciation %    | Rental, BRRRR  | 3%          | Global Market Assumptions panel (default) — per-deal override available in advanced mode with warning |
| Annual Rent Growth %     | Rental, BRRRR  | 3%          | Global Market Assumptions panel (default) — per-deal override available in advanced mode with warning |

#### Per-deal inputs (strategy-dependent)

| Input                    | Applies To     | Default     | Source                                      |
|--------------------------|----------------|-------------|---------------------------------------------|
| Strategy                 | All            | Rental      | User select or URL param                    |
| Deal Label               | All            | "Deal N"    | User input                                  |
| Purchase Price           | All            | —           | User input or URL import                    |
| Down Payment %           | Rental, BRRRR  | 25% / 20%   | User input                                  |
| Loan Rate %              | Rental         | 7.5%        | User input                                  |
| Loan Term (years)        | Rental         | 30          | User input                                  |
| Monthly Rent             | Rental, BRRRR  | —           | User input or imported                      |
| Vacancy %                | Rental, BRRRR  | 8%          | User input                                  |
| OpEx % of Rent           | Rental, BRRRR  | 35%         | User input                                  |
| Rehab Budget             | Flip, BRRRR    | —           | User input                                  |
| Hold Period (months)     | Flip           | 6           | User input                                  |
| Selling Cost %           | Flip           | 6%          | User input (Flip only — NEVER applied to hold-deal Terminal Value) |
| ARV                      | Flip, BRRRR    | —           | User input or imported from ARV calc        |
| HM Rate %                | Flip, BRRRR    | 12%         | User input                                  |
| HM LTC %                 | Flip, BRRRR    | 80%         | User input                                  |
| HM Points %              | Flip, BRRRR    | 3%          | User input                                  |
| Seasoning (months)       | BRRRR          | 6           | User input                                  |
| Refi LTV %               | BRRRR          | 75%         | User input                                  |
| Refi Rate %              | BRRRR          | 7.5%        | User input                                  |
| Monthly Holding Costs    | Flip, BRRRR    | —           | User input                                  |

### Outputs (per deal)

| Output                    | Formula                                                 | Purpose                                          |
|---------------------------|---------------------------------------------------------|--------------------------------------------------|
| 5-Year Total Return $     | See NORMALIZATION ENGINE                                | Primary comparison metric                        |
| Composite Score           | 6-factor weighted                                       | Secondary comparison / tie-breaker               |
| Initial Cash Invested $   | Strategy-specific                                       | Capital requirement                              |
| Year 1 Cash-on-Cash %     | Strategy-specific                                       | Liquidity / annual yield                         |
| Break-Even Month          | CumCashFlow_m ≥ 0 (cash flow only — no equity, no refi)  | Time-to-profit (operational)                     |
| Risk Score (0-100)        | Strategy baseline + deal-specific adjustments           | Risk factor                                      |
| Risk Flag                 | LOW / MODERATE / HIGH                                   | Visual risk summary                              |
| Terminal Equity $         | Month 60 equity position                                | Wealth accumulation                              |
| Cumulative Cash Flow $    | Sum of monthly cash flows over 60 months                | Total cash yield                                 |

### Comparison-level outputs

| Output                  | Computation                                                                                              | Purpose                      |
|-------------------------|----------------------------------------------------------------------------------------------------------|------------------------------|
| Winner                  | Highest Annualized Return, with Composite Score tie-breaker inside the 15% band; RETURN DOMINANCE RULE (≥25% relative Annualized lead) forces Winner regardless of Composite Score | Ranked verdict               |
| Winner Tier             | Clear / Slight Edge / Too Close to Call (driven by Annualized Return delta in pp AND Composite Score delta — see Winner Tiering above) | Calibrated confidence        |
| Annualized Return Gap   | AR_1 − AR_2 (percentage points); primary gap metric                                                      | Quantify Winner strength     |
| Winning Margin $        | TR_1 − TR_2 (absolute dollar delta); contextual, NOT used in Winner determination                        | User-facing context          |
| Negative Runner-up Guard| If runner-up Annualized ≤ 0% OR Total Return ≤ $0, all gaps reported as ABSOLUTE only (never relative %) | Avoid math breakdown          |
| 6-Factor Radar          | Composite Score factors overlaid                                                                         | Visual comparison            |

---

## 10 TEST CASES

Each test specifies inputs, expected primary metric, expected Winner tier, and consistency checks.

### Test 1 — Classic Rental vs BRRRR (Clear Winner scenario)

```
Deal A (Rental):
  P=$200K, DP=25%, LR=7.5%, LT=30, Rent=$1600/mo, Growth=3%, Vac=8%, OpEx=35%, Appr=3%

Deal B (BRRRR):
  P=$140K, RB=$35K, ARV=$220K, Season=6mo, HMRate=12%, RefiLTV=75%, RefiRate=7.5%
  Rent=$1600/mo, Growth=3%, Vac=8%, OpEx=35%, Appr=3%

Expected:
  Deal A Total Return: $38,000-$44,000
  Deal B Total Return: $62,000-$72,000
  Winner: Deal B (BRRRR)
  Tier: Clear Winner (≥20% TR delta, ≥10 CS delta)
  Normalization identity holds for both deals (±$100)
```

### Test 2 — Rental vs Fix and Flip (Slight Edge scenario)

```
Deal A (Rental):
  P=$180K, DP=25%, LR=7.5%, Rent=$1450/mo, OpEx=35%, Appr=3%

Deal B (Flip):
  P=$120K, RB=$35K, ARV=$190K, Hold=6mo, SC=6%, HMRate=12%
  Reinvestment assumption: 8 flips over 5 years

Expected:
  Deal A Total Return: $32,000-$38,000
  Deal B Total Return (with reinvestment): $38,000-$48,000
  Winner: Deal B (Flip)
  Tier: Slight Edge (5-20% TR delta OR CS delta < 10)
  Reinvestment warning banner displayed
```

### Test 3 — Too Close to Call (two similar Rentals)

```
Deal A (Rental): P=$200K, DP=25%, LR=7.5%, Rent=$1700/mo
Deal B (Rental): P=$210K, DP=25%, LR=7.5%, Rent=$1780/mo

Expected:
  Deal A Total Return: $40,000-$44,000
  Deal B Total Return: $41,000-$45,000
  TR delta: <5%, CS delta: <5
  Tier: Too Close to Call
  Display: tie-breaker guidance (location, PM, exit flexibility)
```

### Test 4 — BRRRR with Infinite Return

```
Deal A (BRRRR):
  P=$100K, RB=$30K, ARV=$200K, Season=6mo, Rent=$1500/mo
  Expected: Refi Proceeds > Cash Invested → Capital Left ≤ $0

Expected:
  Cash Invested ≈ $36,000
  Refi Proceeds ≈ $40,000
  Capital Left: −$4,000 (Infinite Return)
  5-Year Total Return: $95,000-$110,000 (high because no capital trapped)
  Risk Score: +15 (capital fully recovered)
  Liquidity Score: +15
  Deal auto-wins in 1:1 comparison vs most Rentals
```

### Test 5 — All deals negative (edge case)

```
Deal A (Rental): P=$300K, DP=20%, LR=8%, Rent=$1500/mo (underpriced rent)
Deal B (Rental): P=$280K, DP=20%, LR=8%, Rent=$1400/mo

Expected:
  Both Total Returns negative over 5 years (appreciation doesn't cover negative cash flow)
  Cautionary banner: "All deals projected to lose money over 5 years"
  Winner still computed (least-negative) with MODERATE/HIGH risk flag
  DSCR warnings for both
```

### Test 6 — Mixed 3-way comparison

```
Deal A (Rental):  P=$220K, DP=25%, Rent=$1700/mo
Deal B (BRRRR):   P=$150K, RB=$40K, ARV=$235K, Rent=$1800/mo
Deal C (Flip):    P=$140K, RB=$40K, ARV=$230K, Hold=7mo

Expected:
  Three distinct Total Returns
  Composite Scores within 15 points of each other
  Winner tier determined by margins
  6-factor radar chart shows all three deals
```

### Test 7 — URL import from Rental Calculator

```
Incoming URL: /compare-real-estate-deals?d1_type=rental&d1_p=250000&d1_dp=25&d1_cc=2.5&d1_lr=7.5&d1_lt=30&d1_r=1950&d1_gr=3&d1_vc=8&d1_op=35&d1_ga=3

Expected:
  Deal 1 auto-populated as Rental
  All fields match URL params exactly (tolerance ±$1)
  Rental Calculator's Cap Rate output matches Compare Deals' internal Cap Rate (±0.1%)
  Consistency verified
```

### Test 8 — Find Break-Even mode (reverse)

```
Deal A (Rental): Target — leave unchanged
Deal B (BRRRR): Adjust Purchase Price to match Deal A's Total Return

Binary search:
  Bounds: ±50% of current BRRRR Purchase Price
  Target: abs(Deal B TR − Deal A TR) ≤ $500
  Max 100 iterations

Expected:
  Returns specific Purchase Price (e.g., "$165,000")
  OR null + "Break-even not achievable within ±50% bounds" if Deal A TR is unreachable
  Display sensitivity note about other variables held constant
```

### Test 9 — Deal Screening mode (filter)

```
Criteria:
  Min Total Return: $50,000
  Min Composite Score: 70
  Max Cash Invested: $60,000
  Min Risk Score: 60

Deals:
  Deal A (Rental, TR $45K, CS 68, Cash $55K, Risk 75) → FAIL (TR, CS)
  Deal B (BRRRR, TR $65K, CS 78, Cash $45K, Risk 65)  → PASS
  Deal C (Flip, TR $55K, CS 62, Cash $50K, Risk 35)   → CONDITIONAL (CS, Risk near thresholds)

Expected:
  Correct PASS/CONDITIONAL/FAIL assignment
  Explanation of which criteria each deal failed
```

### Test 10 — Normalization Invariant stress test

```
For each of 10 randomly-generated deals:
  Verify: abs(Total Return − (CumCashFlow + Terminal − Cash Invested)) ≤ $100

Random deal generator:
  Strategy ∈ {Rental, Flip, BRRRR}
  Purchase Price ∈ [$80K, $500K]
  Rehab (Flip/BRRRR) ∈ [$10K, $80K]
  All other params within reasonable bounds

Expected:
  100% pass rate (all 10 deals satisfy invariant)
  No floating-point accumulation errors
  Amortization edge case (r=0) handled for seller-carry scenarios
```

Tolerance: ±$100 for dollar amounts, ±0.5% for percentages, ±1 month for Break-Even Month.

Each test verifies: (1) normalization invariant, (2) correct Winner tier, (3) all 6 Composite Score factors computed.
---

## 3 SCENARIOS (Conservative / Base / Optimistic)

Applied across all deals in a comparison uniformly, so relative ranking holds under stress.

### Conservative (downside)

```
Rent growth:      −2 percentage points (e.g., 3% → 1%)
Appreciation:     −2 percentage points
Vacancy:          +5 percentage points
OpEx:             +5 percentage points
ARV (BRRRR):      × 0.92
Rehab (Flip):     × 1.20
HM Rate:          +1 percentage point
Refi Rate:        +1 percentage point

Purpose: stress-test Winner against adverse conditions. If Winner changes, it signals
the user's Base-case winner is not robust.
```

### Base (user inputs)

All user-entered values applied as-is.

### Optimistic (upside)

```
Rent growth:      +1 percentage point
Appreciation:     +1 percentage point
Vacancy:          −2 percentage points (floor 3%)
ARV (BRRRR):      × 1.05
Rehab (Flip):     × 0.95

Label: "Rare in 2026 — assumes favorable rent growth and no softening."
```

Display: 3 columns per deal showing Conservative / Base / Optimistic Total Return. Winner highlighted per column. If Winner differs across scenarios → display "Winner Sensitive to Assumptions" warning.

---

## 3 SENSITIVITY TABLES

### Sensitivity 1 — Appreciation × Rent Growth (universal)

```
Rows:    Appreciation 1%, 2%, 3%, 4%, 5%
Columns: Rent Growth 1%, 2%, 3%, 4%, 5%
Cells:   Winner deal label per combination

Purpose: show how appreciation + rent growth assumptions shift the Winner
```

### Sensitivity 2 — Deal-Specific Pivot (Rental OR Flip OR BRRRR)

User selects which deal and which pivot:
```
Rental pivot:   Rent × Purchase Price, or Rent × Vacancy
Flip pivot:     ARV × Rehab, or ARV × Hold Period
BRRRR pivot:    ARV × Rehab, or Refi LTV × Seasoning

Cells:   Total Return of selected deal
```

### Sensitivity 3 — Cross-Strategy (Composite Score Factors)

```
Rows:    Return weight 20%, 30%, 40%
Columns: Risk weight 10%, 20%, 30%
Cells:   Recomputed Composite Score rankings (Winner label)

Purpose: expose how subjective the Composite weights are — educate user that
weights are a judgment call.

Display only in advanced/details section.
```

---

## VISUALIZATIONS

### 1. Total Return Bar Chart

Horizontal bars per deal, sorted descending. Color-coded by strategy (Rental indigo, BRRRR emerald, Flip amber).

### 2. 60-Month Cumulative Cash Flow Chart

Line chart, X-axis = months 0-60, Y-axis = cumulative position in dollars.

**Two lines per deal (v4 round 2 fix — disambiguates Break-Even Month from Wealth Position):**

1. **Operating Cash Flow line (solid, primary)**: 
   - Y = CumCashFlow_m − Cash Invested_0
   - This is the canonical measure; its zero-crossing defines Operating Break-Even Month
   - Uses strategy color at full opacity

2. **Total Wealth Position line (dashed, secondary)**:
   - Y = CumCashFlow_m + Unrealized Equity_m + (Refi Proceeds if m ≥ S, BRRRR only) − Cash Invested_0
   - Shows full investor wealth position including appreciation
   - Informational context — does NOT define Break-Even Month
   - Uses strategy color at 40% opacity

Key visual features:
- **Operating Break-Even crossing** marked with SOLID dot on the solid line
- **Financial Break-Even crossing** (BRRRR only) marked with hollow circle on dashed line
- Refi events (BRRRR) marked with vertical dashed line + "Refi" label
- Flip sale events marked with "Sale Event" annotation + filled square at hold-period month
- Legend clearly distinguishes "Operating Cash Flow" from "Total Wealth Position"

**Rationale:** Users often conflate "my investment is above zero on the chart" with "I've made my money back operationally." The two-line display makes this distinction explicit. Operating Break-Even is slow for Rentals, fast for Flips (at sale), moderate for BRRRR (post-refi cash flow). Wealth Position crosses zero much earlier for appreciation-driven Rentals — but that's paper gain, not recurring cash.

### 3. 6-Factor Composite Score Radar Chart

Hexagonal radar, axes = the 6 factors. One filled polygon per deal (semi-transparent). Winner's polygon highlighted.

### 4. Deal Flow Comparison Table

Structured table showing all outputs per deal:
- Primary rows (BOTH required — dual primary metrics):
  - Row 1a: 5-Year Total Return $ (bold, large)
  - Row 1b: Annualized Return % (bold, large, with CAGR/IRR label)
- Secondary row: Composite Score
- Then: Cash Invested, Year 1 CoC, Operating Break-Even, Financial Break-Even (BRRRR only), Risk Flag
- Bottom row: Winner badge placement (referencing Annualized Return in justification)

---

## RIS H2 SECTION — "What Winner Tier Means"

Mirrors ARV RIS section on Confidence Tiers. Explains user-facing labels.

**CRITICAL (v3 round 2 expert fix) — SINGLE SOURCE OF TRUTH RULE:**
This section MUST strictly follow the Winner Tiering logic defined in the
"WINNER LABEL with CONFIDENCE TIERING" block earlier. **Do not restate
thresholds, numbers, or conditions here.** Restating them creates drift risk:
the logic block and this user-facing block could fall out of sync, producing
a UI that says one thing while the calculator computes another.

This section contains ONLY plain-language explanations of what each tier
MEANS to the user. For exact thresholds, refer implementers to the Winner
Tiering block.

```
Tier: Clear Winner
Meaning:
  The winning deal has meaningful advantages on time-normalized return AND 
  qualitative factors — OR the return dominance is so large that it overrides 
  qualitative concerns entirely. Differences are large enough to survive 
  reasonable assumption changes across Conservative / Base / Optimistic 
  scenarios. Proceed with the winning deal if other due-diligence passes 
  (location, financing, property condition).

Tier: Slight Edge
Meaning:
  The winning deal is statistically better but within a margin that could 
  flip under different assumptions (rent growth, appreciation, rehab 
  execution quality). Consider the tie-breaker factor identified in the 
  per-deal report. Run the Conservative scenario to verify robustness of 
  the ranking. Verify your base-case assumptions before committing capital.

Tier: Too Close to Call
Meaning:
  Financial analysis alone cannot discriminate between deals. Choose based 
  on non-financial factors: location preference, property management 
  availability, exit timing flexibility, personal risk tolerance, capital 
  constraints (some deals require more cash down), or personal strategy 
  preference (active flipping vs passive rental).

Negative-deal edge case:
  If all deals project negative returns over 5 years, the calculator still 
  ranks them (least-negative wins) but displays a cautionary banner. In this 
  situation, the "Winner" label carries a weaker recommendation — you may 
  simply be choosing the best of a weak set.
```

**For exact tier thresholds** (Annualized Return percentage-point deltas,
Composite Score deltas, Return Dominance Rule, Negative Runner-Up guard),
refer to the "WINNER LABEL with CONFIDENCE TIERING" block above. Implementers
must compute tiers from that block only — this block is descriptive, not
prescriptive.

---

## RIS_CONTEXT — Why Mixed-Strategy Comparison Matters in 2026

```
Body (5-7 sentences):
  In the 2026 US market, real estate investors face more strategy choices than 
  pre-pandemic — and tighter margins make the choice costlier. Post-2022 rate 
  environment has compressed rental cash flow (higher debt service), while 
  appreciation has normalized from the 2020-2022 surge. Fix and Flip markets 
  remain active in secondary metros but ROI per deal has compressed 15-25% 
  from 2021 peaks. BRRRR executes well when ARV exceeds acquisition + rehab 
  by 33%+ but refi rates now erode the post-refi cash flow that made BRRRR 
  compelling. No single strategy dominates across all markets or all investor 
  profiles. Side-by-side comparison with normalized 5-year horizon is the only 
  way to answer "what should I do with this $X of capital?" — this calculator 
  provides that answer.
```

---

## BENCHMARKS BY STRATEGY COMBINATION

Not per-state (too many combinations). Instead, by strategy-pair and market tier.

### Rental vs BRRRR (most common comparison)

```
Hot markets (Sunbelt: Austin, Phoenix, Nashville):
  BRRRR wins 55-65% of comparisons (appreciation favors leveraged equity)
  Rental wins 30-35% (lower execution risk)
  Too Close 5-10%

Stable markets (Midwest: Columbus, Indianapolis, Kansas City):
  BRRRR wins 45-55% (moderate appreciation + strong rental cash flow)
  Rental wins 35-45%
  Too Close 10-15%

Flat markets (Rust Belt, older metros):
  Rental wins 50-60% (BRRRR requires appreciation to justify)
  BRRRR wins 25-35%
  Too Close 10-15%

2026 context: refi rates at 7-8% compress BRRRR advantages vs 2019 when refi 
rates were 4-5%. Rental-first strategies regaining appeal.
```

### Rental vs Fix and Flip

```
Flip wins 5-year comparison ONLY if:
  - Reinvestment cadence sustained (6-8 flips over 5 years)
  - Each flip achieves 70% Rule (All-In ≤ ARV × 70%)
  - Market doesn't soften significantly

Rental wins 5-year comparison ONLY if:
  - Rent-to-price ratio > 1% monthly (old 1% Rule)
  - Appreciation ≥ 3% annually
  - DSCR > 1.25

2026 context: Flip reinvestment assumption is increasingly optimistic. In 
most comparisons, Rental edges out Flip once reinvestment risk is priced in.
```

### 3-way (Rental vs BRRRR vs Flip)

```
In the 2026 environment:
  BRRRR wins ~40% of 3-way comparisons (when ARV uplift is real)
  Rental wins ~35%
  Flip wins ~15% (reinvestment-dependent)
  Too Close ~10%

Winner is highly sensitive to:
  Appreciation assumption (higher favors BRRRR)
  Rent growth assumption (higher favors Rental)
  Rehab execution quality (higher variance favors none)
```

---

## LIMITATIONS

### Limitation 1 — Reinvestment Assumption for Fix and Flip

Fix and Flip 5-Year Total Return assumes 100% reinvestment into identical flips. In practice:
- Deal flow is uncertain
- Flip ROI compresses as investor scales
- Each flip carries independent execution risk

This assumption may overstate Flip Total Return. Sensitivity analysis recommended.

### Limitation 2 — 5-Year Fixed Horizon

All comparisons use 60-month horizon. Some deals optimize for shorter or longer holds. User cannot currently adjust horizon. Note in v2 roadmap.

### Limitation 3 — Pre-Tax Analysis Only

Calculator does not model:
- Depreciation recapture on sale
- Capital gains tax (short-term for flips, long-term for holds)
- Ordinary income tax on rental cash flow
- 1031 exchange benefits

Post-tax comparison can meaningfully change Winner (especially Flip vs Rental — flips have less favorable tax treatment). Consult a real estate CPA.

### Limitation 4 — Appreciation and Rent Growth Assumptions

Future appreciation and rent growth cannot be predicted. Calculator uses user-entered assumptions — 5-year projections are highly sensitive to these. Conservative/Base/Optimistic scenarios help stress-test, but real outcomes vary.

### Limitation 5 — Composite Score Weights Are Subjective

The 30/20/15/15/10/10 factor weights embed editorial judgment. A different weight scheme can produce a different Winner. Advanced users should verify the tie-breaker factor aligns with their priorities.

---

## WHEN NOT TO USE THIS CALCULATOR

```
- Single-deal deep analysis: Use Rental/Fix and Flip/BRRRR calculators directly
- Portfolio-level analysis: This compares individual deals, not portfolios
- Tax-sensitive comparison: Consult CPA for post-tax analysis
- Long-hold strategies (>10 years): 5-year horizon insufficient
- Commercial real estate: Calculator assumes residential investment (1-4 unit)
- Speculative land: No rent, no rehab — calculator not designed for this
- Lender loan underwriting: Not accepted by lenders for loan approval
```

---

## COMMON MISTAKES (5 items)

### Mistake 1 — Comparing deals with mismatched macro assumptions

In v1, the calculator enforces GLOBAL Appreciation and Rent Growth by default to prevent this mistake. When advanced mode is enabled and users override per-deal, a warning banner is shown. Even so: if you override (e.g., 5% appreciation for Deal A, 2% for Deal B), do so only when you have market data justifying the difference (e.g., Austin vs Cleveland). Do not set different values based on preference for the deal — that rigs the comparison in favor of the "preferred" deal.

### Mistake 2 — Ignoring Winner Tier

Users fixate on Winner label and ignore confidence tier. "Too Close to Call" means "don't use financial analysis to decide" — users who ignore this often regret the choice later.

### Mistake 3 — Trusting Fix and Flip Total Return without reinvestment reality check

Reinvestment assumption is aggressive. Users should ask: "Can I realistically close 8 flips in 5 years?"

### Mistake 4 — Comparing deals in different markets without context

A Cleveland Rental and an Austin BRRRR are in different economic regimes. Relative comparison valid; absolute-return expectations may still differ from projections.

### Mistake 5 — Using Compare for deals you haven't screened individually

Compare is a decision tool, not a due-diligence tool. Use individual calculators first (Cap Rate, DSCR, 70% Rule), then bring finalists to Compare.

---

## FAQ (9 questions)

```
Q1: How does the calculator compare deals with different strategies?
A1: By normalizing each deal into TWO comparable metrics: (1) 5-Year Total Return $ 
(absolute dollar profit over 60 months) and (2) Annualized Return % — computed as 
5-year CAGR for held assets and for Fix and Flip reinvestment mode, or as IRR for 
Fix and Flip single-flip mode. Both are shown because Total Return alone misleads — 
$50K in 6 months is not the same as $50K over 5 years. Winner logic prioritizes 
Annualized Return when deal durations differ materially.

Q2: Why 5 years? Can I change the horizon?
A2: 5 years is fixed in v1 to prevent apples-to-oranges comparisons. All deals 
are evaluated over 60 months with reinvestment assumptions where applicable. 
Custom horizon is planned for v2.

Q3: What's the Annualized Return and why is it the Winner driver?
A3: Annualized Return converts each deal's cash flows into an equivalent yearly 
rate (CAGR for Rental/BRRRR, IRR for Fix and Flip). It eliminates the time-value 
bias where a $50K flip profit over 6 months looks equal to a $50K rental return 
over 5 years. The calculator determines Winner primarily by Annualized Return 
because it's time-adjusted — this is the mathematically honest comparison. 
Total Return $ is still shown for intuitive absolute context.

Q4: What's the Composite Score and when does it determine the Winner?
A4: Composite Score is a weighted 0-100 score across 6 factors: Return, Risk, 
Liquidity, Time-to-Profit, Effort, Scalability. It acts as tie-breaker only 
when Annualized Returns are within 15% of each other. If one deal leads by 
≥25% relative Annualized Return, that deal wins regardless of Composite 
Score — financial dominance cannot be overridden by qualitative factors.

Q5: What does "Too Close to Call" mean?
A5: It means Annualized Return differs by <1 percentage point AND Composite 
Score by <5. In this range, financial analysis cannot discriminate between 
deals. Choose based on non-financial factors: location, management 
availability, personal risk tolerance, exit flexibility. "Too Close to Call" 
is not a failure — it's calibrated honesty.

Q6: Does this calculator account for taxes?
A6: No. All figures are pre-tax. Post-tax analysis requires a CPA. For a 
Rental-vs-Flip comparison, post-tax treatment is material: flip profits are 
taxed as ordinary income (or short-term capital gains), while long-term holds 
benefit from depreciation and long-term capital gains rates. Winner can change 
after tax.

Q7: Can I import a deal from another RealCalc calculator?
A7: Yes. Rental, Fix and Flip, and BRRRR calculators each have "Compare with 
another deal" buttons that pre-fill Compare Deals via URL params. ARV 
Calculator output can also fill ARV values in Flip or BRRRR deals.

Q8: What if all my deals show negative Total Return?
A8: The calculator still ranks them (least-negative wins) but displays a 
warning banner. This usually indicates over-leveraged acquisitions or 
underpriced rent — consider whether the deals are actually viable. When 
runner-up Total Return is negative, Winner uses absolute dollar gap (not 
percentage) to avoid mathematical breakdown.

Q9: Is this accepted by lenders or appraisers?
A9: No. Compare Deals is a strategic comparison tool for investors. Lender 
underwriting requires licensed appraisal and lender-specific DSCR calculations. 
This is a screening tool, not a loan application document.
```

---

## RELATED CALCULATORS

```
- Rental Property Calculator — deep analysis of a single rental
- Fix and Flip Calculator — deep analysis of a single flip
- BRRRR Calculator — deep analysis of a single BRRRR
- ARV Calculator — estimate ARV for Flip/BRRRR inputs
- Cap Rate / NOI / DSCR / CoC — component metrics used in all 3 strategies
```

---

## TITLE RULE

```
HARDCODED FALLBACK (always use, no custom generation):
TITLE: Compare Real Estate Deals — Strategy Hub | RealCalc
(verified 51 characters)

SIMPLIFIED RULE (following ARV v2 round 2 standard):
ALWAYS use the fallback title above. Do NOT generate a custom title.
Do NOT modify the fallback. Do NOT attempt character counting.
```

---

## OUTPUT CHECKLIST

Before finalizing this RIS, the calculator spec must include:

- [ ] **DUAL PRIMARY metrics: 5-Year Total Return $ AND Annualized Return % (both shown, Winner prioritizes Annualized) (v2 expert fix)**
- [ ] **Display format shows Annualized Return under Total Return on every deal card — NEVER omit Annualized (v3 expert fix)**
- [ ] **Winner banner references Annualized Return as primary justification (e.g., "22.4% vs 16.8% annualized") — Total Return $ is context only (v3 expert fix)**
- [ ] **Comparison-level Outputs table: "Winner = Highest Annualized Return with Composite tie-breaker inside 15% band; Return Dominance Rule overrides Composite at ≥25% relative lead" — NEVER "Highest Total Return" (v3 expert fix)**
- [ ] **RIS_H2 "What Winner Tier Means" uses Annualized Return deltas in pp (≥5 pp / 1-5 pp / <1 pp) — NEVER Total Return % deltas (v3 expert fix)**
- [ ] **Annualized Return formulas: CAGR for Rental/BRRRR, IRR for single Flip, 5-year-normalized CAGR for Flip reinvestment (v2 expert fix)**
- [ ] **Normalization engine for all 3 strategies with Normalization Invariant identity check (±$100 tolerance) per deal**
- [ ] **Secondary metric Composite Score 0-100 with 6-factor weighted breakdown**
- [ ] **Composite factor weights hardcoded: Return 30%, Risk 20%, Liquidity 15%, TimeToProfit 15%, Effort 10%, Scalability 10%**
- [ ] **RETURN DOMINANCE RULE: ≥25% relative Annualized Return lead overrides Composite Score — Composite used ONLY within 15% band (v2 expert fix)**
- [ ] **Winner Tier with 3 levels driven by Annualized Return (not absolute $): Clear Winner / Slight Edge / Too Close to Call (v2 expert fix)**
- [ ] **Clear Winner requires ≥5 pp Annualized Return delta AND ≥10 CS delta (BOTH) (v2 expert fix)**
- [ ] **Too Close requires <1 pp Annualized Return delta AND <5 CS delta (BOTH) (v2 expert fix)**
- [ ] **NEGATIVE RUNNER-UP guard: if runner-up Annualized Return ≤ 0% OR Total Return ≤ $0, use absolute dollar and percentage-point gaps (never relative %) — avoids math breakdown (v2 expert fix)**
- [ ] **Risk Score DYNAMIC adjustments (leverage, DSCR, rehab intensity, hold duration, deal quality, market context) — baselines are starting points NOT floors. Low-risk Flip can outscore high-risk Rental (v2 expert fix)**
- [ ] **Cash Recovered at Refi (BRRRR) shown SEPARATELY from Total Return — refi cash is NOT profit, it's borrowed money (v2 expert fix)**
- [ ] **Break-Even displayed in TWO variants: Operating Break-Even (cash flow only, primary) AND Financial Break-Even (including refi, secondary). Avoids false-positive BRRRR signals (v2 expert fix)**
- [ ] **Fix and Flip Total Return uses reinvestment as default; 4% idle yield is fallback ONLY when user toggles "Conservative: assume no reinvestment" (v2 expert fix)**
- [ ] **Import Schema for URL params from Rental/Flip/BRRRR/ARV calculators**
- [ ] **3 modes: Compare (default indigo) / Break-Even (blue) / Deal Screening (emerald)**
- [ ] **Up to 3 deals (minimum 2 for comparison)**
- [ ] **Mixed strategies supported (any combination of Rental/Flip/BRRRR)**
- [ ] **Fix and Flip reinvestment assumption warning displayed on every Flip deal**
- [ ] **ARV Confidence Tier pass-through from ARV calc affects Risk Score**
- [ ] **Pre-tax analysis explicitly labeled in 5 places (Overview P4, How to Use, per-deal card, Limitations, FAQ)**
- [ ] **Consistency with source calculators: Cap Rate / DSCR / CoC match within ±0.1%**
- [ ] **Terminal Value uses equity basis (no sale), explicitly noted**
- [ ] **Terminal Value consistency rule: NEVER apply selling costs (6-8%) to month-60 Rental/BRRRR. Only Fix and Flip (actual sale at hold period) deducts selling costs. Enforced in SEO, FAQ, Limitations, Vue (v3 expert fix)**
- [ ] **Annual Appreciation and Rent Growth are GLOBAL by default in v1 — single Market Assumptions panel at top, flows into all deals. Per-deal override ONLY in advanced mode with WARNING banner about biased comparison (v3 expert fix)**
- [ ] **URL import handling: if d{N}_ga values identical across deals → collapse to global (g_adv=0); if values differ → auto-activate advanced mode (g_adv=1) with warning (v3 expert fix)**
- [ ] **Amortization r=0 edge case handled (seller carry)**
- [ ] **At least 2 deals required for Winner — single deal shows Solo Analysis mode**
- [ ] **10 test cases including normalization invariant stress test**
- [ ] **3 scenarios Conservative/Base/Optimistic applied uniformly across deals**
- [ ] **Scenario-based Winner sensitivity warning if Winner changes across scenarios**
- [ ] **3 sensitivity tables: Appreciation × Rent Growth, Deal-Specific Pivot, Composite Weight Sensitivity**
- [ ] **60-Month Cumulative Position chart with refi/flip-exit annotations**
- [ ] **6-Factor Composite Radar chart overlaying all deals**
- [ ] **TITLE hardcoded fallback "Compare Real Estate Deals — Strategy Hub | RealCalc" (51 chars) — no custom generation**
- [ ] **"Not a lender underwriting tool" disclaimer in 4 places**
- [ ] **Limitation for reinvestment assumption, 5-year fixed horizon, pre-tax only, assumption sensitivity, subjective weights**
- [ ] **When Not to Use list covers 7 scenarios**
- [ ] **FAQ 8 questions covering normalization, horizon, composite, winner tier, taxes, import, negative returns, lender**
- [ ] **Composite Score weights are hardcoded (v2 may allow override — not v1)**
- [ ] **Operating Break-Even uses CumCashFlow_m ≥ 0 ONLY (no equity, no refi, no sale proceeds) — single canonical definition across spec. Removes previous conflict with "CumCashFlow + Unrealized Equity − Cash Invested" formulation (v4 round 2 expert fix)**
- [ ] **60-Month chart shows TWO lines per deal: solid "Operating Cash Flow" (defines Break-Even) + dashed "Total Wealth Position" (informational). Disambiguates Break-Even Month from wealth position (v4 round 2 expert fix)**
- [ ] **Annualized Return label is STRICT per mode: Rental/BRRRR = "(5Y CAGR)"; Flip reinvestment = "(5Y CAGR, reinvestment)"; Flip single-flip = "(IRR, single flip)". Label MUST match formula. Never call CAGR "IRR" or vice versa (v4 round 2 expert fix)**
- [ ] **Return_Score HARD FLOOR: if Deal Annualized Return ≤ 0, Score = 0 (overrides formula entirely). Prevents negative deals scoring 20-40 when median is also negative (v4 round 2 expert fix)**
- [ ] **Risk Score Critical Rule 10 is a POINTER to canonical Risk Score section (not a duplicate spec). Dedup prevents drift between two Risk Score definitions (v4 round 2 expert fix)**
- [ ] **Import Schema TYPE VALIDATION: per-strategy ALLOWED/IGNORED param sets. Conflicting params silently dropped with user warning "Some imported parameters do not match selected strategy and were ignored" (v4 round 2 expert fix)**
- [ ] **Break-Even SINGLE SOURCE OF TRUTH: Metric 3 is canonical; Critical Rule 11 is reference-only (no formulas restated). "Financial Break-Even" is the ONLY correct name — "Capital Recovery Break-Even" is forbidden synonym (v4 round 3 expert fix)**
- [ ] **Time-to-Profit Score uses SAME formula as Operating Break-Even (cash-flow-only, no equity). Aligns Composite with break-even metric; removes appreciation bias favoring Rental. Rental typically scores 10-25 (not 40-55) under canonical definition (v4 round 3 expert fix)**
- [ ] **Mixed IRR+CAGR UI note: when comparison contains at least one single-flip IRR deal alongside any CAGR deal, display methodology disclosure banner "Annualized returns use different methods: IRR for single flips, CAGR for multi-year holds" (v4 round 3 expert fix)**
- [ ] **EXTREME FLIP LOOP GUARD: if Flip Mode A or C produces Annualized Return > 80%, display amber warning "Unusually high projected flip return — verify ARV and rehab assumptions". Winner not auto-downgraded but warning carries into Winner banner (v4 round 3 expert fix)**
- [ ] **STEP 0 EXACT TIE HANDLING: when AR_delta_pp = 0 (|<0.1 pp|), Winner determined by Composite Score only. Sub-tiers: CS_delta ≥10 Clear / 5-10 Slight / <5 Too Close. Runs BEFORE Return Dominance and Standard Tier logic (v4 round 3 expert fix)**
- [ ] **Break-Even SOURCE OF TRUTH declaration at top of Metric 3 — canonical formula defined here ONLY, all other references descriptive-only. Forbidden synonyms enumerated. Vue implementation must map exactly to Metric 3 formula (v4 round 4 expert fix)**
- [ ] **EXTREME FLIP AUTO-DOWNGRADE Winner tier: if Flip AR > 80% would be Winner, tier drops one level (Clear→Slight, Slight→Too Close). Banner mandates: "Projection depends on aggressive compounding — see warning on Deal X". Prevents fantasy-return recommendations (v4 round 4 expert fix)**
- [ ] **VISUAL PRIORITY RULE: Winner card has solid highlighted border, background tint, "WINNER" badge, larger primary metrics, elevation shadow. Non-winner cards neutral even if higher Composite Score. Composite Score never visually dominates Annualized Return. CSS classes: deal-card--winner vs deal-card--neutral (v4 round 4 expert fix)**
- [ ] **Return Score uses RANK+DELTA HYBRID: Rank Bonus (top +25, middle 0, bottom −25) + Delta Bonus (capped ±25) = stable Score 0-100. Replaces pure ratio formula which was unstable for tight 2-3 deal comparisons (v4 round 4 expert fix)**
- [ ] **Mode B (Idle Yield) HIDDEN in v1 default UI — accessible ONLY via Advanced Settings. Default Flip mode is Mode A. Reduces cognitive burden; rarely-used option out of primary interface (v4 round 4 expert fix)**
- [ ] **CLUSTER CHECK: when 3 deals are present AND abs(AR_1 − AR_3) < 2 pp AND all Composite Scores within 10 pts → override tier to "Too Close to Call — Cluster Detected". Prevents false precision in tight 3-way comparisons (v4 expert fix)**
- [ ] **Return Dominance Rule overrides Cluster Check (AR_1 leading by ≥25% relative wins regardless of runner-up cluster) (v4 expert fix)**
- [ ] **UI CLARITY RULE: if Winner has LOWER Composite Score than another deal, display secondary badge "Highest Return, not Highest Score" with explanation of the other deal's qualitative advantages — prevents user confusion (v4 expert fix)**
- [ ] **Percentile-ranking alternative for Return_Score noted in v2 roadmap (not applied in v1) — current v1 uses ratio formula with near-zero guard (v4 expert fix — acknowledged not implemented)**
- [ ] **Operating Break-Even uses CANONICAL cash-flow-only definition: CumCashFlow_m ≥ 0. NO equity, NO refi, NO sale proceeds. Single source of truth across Metric 3, Critical Rule 11, Outputs table (v4 round 2 expert fix — conflict resolved)**
- [ ] **60-Month chart displays TWO lines per deal: solid "Operating Cash Flow" (defines Break-Even) + dashed "Total Wealth Position" (informational, includes equity). Legend distinguishes clearly (v4 round 2 expert fix)**
- [ ] **Annualized Return label STRICT per mode: Rental/BRRRR = "(5Y CAGR)"; Flip reinvestment = "(5Y CAGR, reinvestment)" NOT IRR; Flip single-flip = "(IRR, single flip)" — label must match method used (v4 round 2 expert fix)**
- [ ] **Return_Score HARD FLOOR: if Deal Annualized Return ≤ 0 → Return_Score = 0 (skip formula entirely). Prevents negative deals from contributing positive score when median is also negative (v4 round 2 expert fix)**
- [ ] **Critical Rule 10 Risk Score is POINTER ONLY — references canonical Risk Score block under Composite Score. No duplicate adjustment values. Prevents drift between blocks (v4 round 2 expert fix — dedup)**
- [ ] **Return_Score computed from ANNUALIZED RETURN (not Total Return) — aligns Composite with Winner logic, prevents dual-economy bug (v3 round 2 expert fix)**
- [ ] **Return_Score formula includes near-zero median guard: denominator = max(abs(Median AR), 0.10) to prevent score explosion (v3 round 2 fix)**
- [ ] **RIS H2 "What Winner Tier Means" contains NO duplicate thresholds — only plain-language explanations. Single source of truth for thresholds is the "WINNER LABEL with CONFIDENCE TIERING" block above (v3 round 2 expert fix)**
- [ ] **Flip Mode C (ROI Degradation, opt-in) available with 5-10% compression per cycle (default 7%). Displayed as "Realistic: assume ROI compression over time" toggle (v3 round 2 fix)**
- [ ] **Mode A footnote warns about ROI compression in competitive markets and points to Mode C toggle (v3 round 2 fix)**
- [ ] **Flip Operating Break-Even labeled "(Sale Event — not recurring operational cash flow)" to prevent confusion with rental-style income (v3 round 2 fix)**

**Output only the RIS content package in Markdown. Do not output code. Do not output HTML. Do not output Vue. This is a specification document that will be consumed by the Master Prompt later alongside the SEO Package.**
