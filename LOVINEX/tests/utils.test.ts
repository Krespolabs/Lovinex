import assert from "node:assert/strict"
import test from "node:test"
import { cn } from "../lib/utils"

test("cn merges conflicting Tailwind utilities in favor of the later class", () => {
  assert.equal(cn("px-2 py-1", "px-4"), "py-1 px-4")
})

test("cn combines conditional values and removes overridden text styles", () => {
  assert.equal(
    cn("text-sm", ["font-medium", { "text-lg": true, hidden: false }]),
    "font-medium text-lg",
  )
})

test("cn preserves utilities from unrelated responsive and state variants", () => {
  assert.equal(
    cn("bg-white hover:bg-slate-100", "md:bg-black hover:bg-slate-200"),
    "bg-white md:bg-black hover:bg-slate-200",
  )
})
