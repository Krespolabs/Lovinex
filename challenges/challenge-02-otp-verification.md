# Challenge 02 — Custom OTP Email Verification

## Problem Statement
Build a custom 6-digit OTP email verification system for a mobile app. The system must replace Firebase's built-in email verification with a custom flow that gives full control over the email template, OTP expiry, and retry logic.

## Context
Firebase's default email verification is a link-based flow — not suitable for mobile apps that need a 6-digit code entry screen. The solution uses Firebase Cloud Functions Gen 2 plus Resend as the email delivery provider.

## Constraints
- OTP must expire after 10 minutes
- Maximum 3 verification attempts per OTP
- OTP must be invalidated after successful verification
- Must be secure — OTP stored server-side only, never returned to client
- Must work at scale — 100K+ concurrent users

## System Components
- Firebase Cloud Function Gen 2 — generates and sends OTP
- Firestore — stores OTP with expiry and attempt count
- Resend API — delivers branded email
- Android client — captures 6-digit input and calls verification function

## Data Structure
otps/{userId} = { code, expiresAt, attempts, verified }

## Test Cases
1. User requests OTP — result: 6-digit code stored in Firestore, email sent via Resend
2. User enters correct OTP within 10 minutes — result: verified = true, OTP document deleted
3. User enters wrong OTP — result: attempts incremented, error returned
4. User enters wrong OTP 3 times — result: OTP invalidated, user must request new one
5. User enters correct OTP after 10 minutes — result: expired error returned
6. User requests OTP twice rapidly — result: second request overwrites first, only latest OTP is valid

## Solution Approach
Step 1 — Client calls generateOtp Cloud Function with userId
Step 2 — Function generates 6-digit code, stores hash in Firestore with expiresAt = now + 10 minutes
Step 3 — Function calls Resend API to deliver branded email with the code
Step 4 — Client submits code to verifyOtp Cloud Function
Step 5 — Function checks expiry, attempt count, then compares code
Step 6 — On success: mark user as verified in Firestore, delete OTP document

## Key Engineering Decision
Storing a hash of the OTP rather than the raw code means even if Firestore is compromised, the actual codes are not exposed. Comparison is done server-side only — the raw code never travels back to the client after generation.

## Reasoning Trace
Firebase's built-in verification cannot be customized for a 6-digit flow. Building on Cloud Functions Gen 2 with minInstances set to 1 eliminates cold-start latency on the critical verification path. Resend provides reliable delivery with open tracking for debugging failed verifications in production.
