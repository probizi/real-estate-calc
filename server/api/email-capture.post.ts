// ─── Email Capture Endpoint ───────────────────────────────────────────────────
// Stores leads in /data/leads.jsonl (newline-delimited JSON) on the server.
// Swap this out for a CRM / email platform (Mailchimp, ConvertKit, etc.) later.

import { appendFile, mkdir } from 'node:fs/promises'
import { join } from 'node:path'
import { defineEventHandler, readBody, createError } from 'h3'

interface LeadBody {
  email:      string
  name?:      string | null
  market?:    string | null
  calculator?: string | null
  result?:    string | null
  capturedAt?: string
}

export default defineEventHandler(async (event) => {
  const body: LeadBody = await readBody(event)

  // Validate
  if (!body.email || typeof body.email !== 'string') {
    throw createError({ statusCode: 400, statusMessage: 'Email is required.' })
  }
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  if (!emailRegex.test(body.email)) {
    throw createError({ statusCode: 400, statusMessage: 'Invalid email address.' })
  }

  const lead = {
    email:      body.email.toLowerCase().trim(),
    name:       body.name       || null,
    market:     body.market     || null,
    calculator: body.calculator || null,
    result:     body.result     || null,
    capturedAt: body.capturedAt || new Date().toISOString(),
    ip:         getRequestHeader(event, 'x-forwarded-for')?.split(',')[0]?.trim() || null,
  }

  // Persist to file (non-blocking; fire and forget — don't fail the response if write fails)
  try {
    const dataDir = join(process.cwd(), 'data')
    await mkdir(dataDir, { recursive: true })
    await appendFile(join(dataDir, 'leads.jsonl'), JSON.stringify(lead) + '\n', 'utf8')
  } catch (err) {
    console.error('[email-capture] Failed to write lead to disk:', err)
    // Still return success — don't punish the user for a disk issue
  }

  // TODO: forward to your email platform here
  // e.g. await mailchimp.lists.addListMember(listId, { email_address: lead.email, status: 'subscribed' })

  console.info(`[email-capture] New lead: ${lead.email} | calc: ${lead.calculator} | market: ${lead.market}`)

  return { ok: true }
})
