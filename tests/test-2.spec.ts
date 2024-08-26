import { test, expect } from "@playwright/test"

test("test", async ({ page }) => {
  await page.goto(
    "http://localhost:4000/moneyout/U2FsdGVkX1-JDwamntTiDedQZeeub5DTErcFN9tocVtsFhctARRPs6F3viB-inZVRc-OTf1A3bUXB9sVmb0SkgVsc42ngjH7KU6dW9xLFVLnfZN6px9fh1JJ-QmmVKd5kDvA6Yn_9brnGrfoO8cctXoI49zf5JegTqU6wQHzs4nSyclRfTkovz0SvnmO8JaQTXZs9XAFi0akV27ikOgZSgZ0dqhRzPUtOmC5dEqvMX1f70apq3vXKzbf5hQplJwEIH2Tgl_hGRzKZUQywTb1dA"
  )
  await page.getByLabel("").first().click()
  await page
    .getByRole("option", { name: "New Business/ Payment premi" })
    .click()
  await page.getByLabel("New Business/ Payment premi").nth(1).click()
  await page.getByRole("option", { name: "BANK SINARMAS" }).click()
  await page
    .locator("tr")
    .filter({ hasText: "New Business/ Payment" })
    .getByRole("cell")
    .nth(2)
    .click()
  await page.getByRole("option", { name: "0000382795" }).click()
  await page
    .locator("table")
    .filter({ hasText: "Kurs AmountRemarks" })
    .getByLabel("New Business/ Payment premi")
    .click()
  await page.getByRole("option", { name: "IDR" }).click()
  await page
    .locator("tr")
    .filter({ hasText: "IDR" })
    .getByPlaceholder("amount")
    .click()
  await page
    .locator("tr")
    .filter({ hasText: "IDR" })
    .getByPlaceholder("amount")
    .fill("10.0000")
  await page.getByPlaceholder("remark", { exact: true }).click()
  await page.getByPlaceholder("remark", { exact: true }).fill("TES 1")
  await page.getByRole("button").first().click()
  await page.getByPlaceholder("remark").nth(1).click()
  await page.getByPlaceholder("remark").nth(1).fill("TES 2")
  await page.getByText("New Business/ Payment premi").nth(1).click()
  await page.getByRole("option", { name: "Claim Rumah sakit" }).click()
  await page
    .locator("tr")
    .filter({ hasText: "Claim Rumah sakit" })
    .getByLabel("New Business/ Payment premi")
    .nth(1)
    .click()
  await page.getByRole("option", { name: "BANK BTN", exact: true }).click()
  await page
    .locator(
      "div:nth-child(3) > .p-2 > table > tbody > tr > td:nth-child(3) > div > .MuiAutocomplete-root > .MuiFormControl-root > .MuiInputBase-root"
    )
    .click()
  await page.getByRole("option", { name: "0002595559" }).click()
  await page
    .getByRole("row", { name: "New Business/ Payment premi 100.000 TES 2" })
    .getByPlaceholder("amount")
    .click()
  await page
    .getByRole("row", { name: "New Business/ Payment premi 100.000 TES 2" })
    .getByPlaceholder("amount")
    .fill("40.0000")
  await page.getByRole("button").nth(1).click()
  await page.getByPlaceholder("Transaction ID").click()
  await page.getByPlaceholder("Transaction ID").fill("")
  await page
    .locator("table")
    .filter({ hasText: "KursAmountRemark" })
    .getByLabel("")
    .click()
  await page.getByRole("option", { name: "IDR" }).click()
  // await page
  //   .locator("tr")
  //   .filter({ hasText: "IDR" })
  //   .getByPlaceholder("amount")
  //   .click()
  await page
    .locator("tr")
    .filter({ hasText: "IDR" })
    .getByPlaceholder("amount")
    .fill("20.0000")
  await page.getByPlaceholder("Remark", { exact: true }).click()
  await page.getByPlaceholder("Remark", { exact: true }).fill("TES 1")
  await page.getByRole("button").nth(1).click()
  await page.getByText("Renewal").nth(1).click()
  await page.getByRole("option", { name: "New Bussiness" }).click()
  await page.getByPlaceholder("amount").nth(2).click()
  await page.getByPlaceholder("amount").nth(2).fill("10.0000")
  await page
    .getByRole("row", { name: "​ 100.000 TES" })
    .getByPlaceholder("Remark")
    .click()
  await page
    .getByRole("row", { name: "​ 100.000 TES" })
    .getByPlaceholder("Remark")
    .fill("TES 2")
  await page.getByRole("button").nth(2).click()
  await new Promise(() => {}) // prevents your script from exiting!
})
