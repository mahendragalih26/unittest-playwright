import { test, expect } from "@playwright/test"

test("test", async ({ page }) => {
  await page.goto(
    "http://localhost:4000/moneyout/U2FsdGVkX1-JDwamntTiDedQZeeub5DTErcFN9tocVtsFhctARRPs6F3viB-inZVRc-OTf1A3bUXB9sVmb0SkgVsc42ngjH7KU6dW9xLFVLnfZN6px9fh1JJ-QmmVKd5kDvA6Yn_9brnGrfoO8cctXoI49zf5JegTqU6wQHzs4nSyclRfTkovz0SvnmO8JaQTXZs9XAFi0akV27ikOgZSgZ0dqhRzPUtOmC5dEqvMX1f70apq3vXKzbf5hQplJwEIH2Tgl_hGRzKZUQywTb1dA"
  )
  await page.getByLabel("").first().click()
  await page.getByRole("option", { name: "Claim Rumah sakit" }).click()
  await page.getByLabel("Claim Rumah sakit").nth(1).click()
  await page.getByRole("option", { name: "BANK SINARMAS" }).click()
  await page
    .locator("table")
    .filter({ hasText: "Transaction TypeNama BankNo." })
    .getByRole("combobox")
    .nth(2)
    .click()
  await page.getByRole("option", { name: "0000382795" }).click()
  await page
    .locator("table")
    .filter({ hasText: "Kurs AmountRemarks" })
    .getByLabel("Claim Rumah sakit")
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
    .fill("20.0000")
  await page.getByPlaceholder("remark", { exact: true }).click()
  await page.getByPlaceholder("remark", { exact: true }).fill("TES 1")
  await page.getByRole("button").first().click()
  await page.getByPlaceholder("remark").nth(1).click()
  await page.getByPlaceholder("remark").nth(1).fill("TES 2")
  await page.getByText("Claim Rumah sakit").nth(1).click()
  await page.getByRole("option", { name: "Reimburssment" }).click()
  await page
    .locator("tr")
    .filter({ hasText: "Reimburssment" })
    .getByLabel("Claim Rumah sakit")
    .nth(1)
    .click()
  await page.getByRole("option", { name: "BANK BNI" }).click()
  await page
    .locator("tr")
    .filter({ hasText: "ReimburssmentBANK BNI" })
    .getByRole("combobox")
    .nth(2)
    .click()
  await page.getByRole("option", { name: "0000382809" }).click()
  await page.getByRole("button").nth(1).click()
  await page.getByText("Renewal").click()
  await page.getByRole("option", { name: "New Bussiness" }).click()
  await page
    .locator("table")
    .filter({ hasText: "KursAmountRemark" })
    .getByLabel("Claim Rumah sakit")
    .click()
  await page.getByText("IDRUSD").click()
  await page
    .locator("tr")
    .filter({ hasText: "USD" })
    .getByPlaceholder("amount")
    .click()
  await page
    .locator("tr")
    .filter({ hasText: "USD" })
    .getByPlaceholder("amount")
    .click()
  await page
    .locator("tr")
    .filter({ hasText: "USD" })
    .getByPlaceholder("amount")
    .fill("10.0000")
  await page.getByPlaceholder("Remark", { exact: true }).click()
  await page.getByPlaceholder("Remark", { exact: true }).fill("TES 1")
  await page
    .locator(".border-0 > div > .content-center > .px-3 > .flex > .border-2")
    .click()
  await page.getByText("New Bussiness").nth(1).click()
  await page.getByRole("option", { name: "Renewal" }).click()
  await page.getByPlaceholder("Remark").nth(4).click()
  await page.getByPlaceholder("Remark").nth(4).fill("TES 2")
  await page
    .locator(".border-0 > div > .content-center > .px-3 > .flex > .border-2")
    .click()
  await page.getByText("BANK BNI").nth(1).click()
  await page.getByRole("option", { name: "BANK BJB", exact: true }).click()
  await page
    .getByRole("cell", { name: "0000382809" })
    .getByRole("combobox")
    .click()
  await page.getByRole("option", { name: "800033194200" }).click()
  await page.getByPlaceholder("remark", { exact: true }).nth(2).click()
  await page.getByPlaceholder("remark", { exact: true }).nth(2).fill("TES 3")
  await page
    .locator("div:nth-child(4) > .content-center > .px-3 > .flex > .border-2")
    .click()
  await page.getByRole("button", { name: "Save" }).click()
  await new Promise(() => {}) // prevents your script from exiting!
})
