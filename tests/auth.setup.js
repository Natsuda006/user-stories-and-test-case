import { test as setup } from "@playwright/test";
import { existsSync } from "node:fs";

const authFile = "playwright/.auth/admin.json";

setup("Login as Admin with Google", async ({ page }) => {
  setup.setTimeout(120000);

  if (existsSync(authFile)) {
    console.log("Found saved admin session, skipping Google login.");
    return;
  }

  await page.goto("/sign-in");

  console.log("Waiting for Google Login...");

  await page.waitForURL("**/admin", {
    timeout: 120000,
  });

  await page.context().storageState({
    path: authFile,
  });

  console.log("Admin login successful.");
});