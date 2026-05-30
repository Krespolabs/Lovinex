# Challenge 01 — Real-Time Mutual Like Matching

## Problem Statement
Build a function that detects when two users have liked each other and creates a match document in Firestore. The function must handle race conditions where both users like each other at the same millisecond.

## Context
In a dating app, User A likes User B. If User B has already liked User A, a match must be created. If not, just store the like and wait.

## Constraints
- Must be atomic — no duplicate match documents
- Must handle concurrent writes safely
- Match document must only be created once regardless of who triggers it
- Must work at scale — 100K+ concurrent users

## Expected Function Signature
suspend fun processLike(fromUserId: String, toUserId: String): LikeResult

## Data Structure
likes/{userId}/likedUsers/{targetId} = timestamp
matches/{matchId} = { user1, user2, createdAt, matchId }

## Test Cases
1. User A likes User B — no existing like from B — result: like stored, no match
2. User A likes User B — B already liked A — result: match document created
3. User A and User B like each other simultaneously — result: exactly one match document created, no duplicates
4. User A likes User B twice — result: idempotent, no duplicate likes or matches

## Solution Approach
Step 1 — Write like document to Firestore
Step 2 — Check if reverse like exists using a Firestore transaction
Step 3 — If reverse like exists, generate matchId as sorted concatenation of both userIds to ensure uniqueness
Step 4 — Use Firestore set with merge to prevent duplicate match documents

## Key Engineering Decision
Generating matchId as sorted(userId1 + userId2) ensures the same match ID is always produced regardless of who triggers it — making the write idempotent and race-condition safe.

## Reasoning Trace
The naive approach checks then writes — this creates a race condition. The correct approach uses a Firestore transaction to read and write atomically, combined with a deterministic matchId that prevents duplicates even if two writes slip through.
