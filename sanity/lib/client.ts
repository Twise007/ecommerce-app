import { createClient } from "next-sanity"

import { apiVersion, dataset, projectId, useCdn } from "../env"

export const client = createClient({
  apiVersion,
  dataset,
  projectId,
  useCdn,
  token:
    "skTEutXuvLvcdfETShWHxcsi2OIVVzMxpWcdPG8HpCtobcVK4Dp8gJDOsu4OHj5Fsn89376FrEOuyujw2YJddjB62UIQaskX1DCqfta3puMTBiHcVyO92C61Ncc4ZumoCJVMncD3eOxl70dfy8DgbWht9fTzgs4AwiBrAmIH8aruZNx0QosK",
    
})
