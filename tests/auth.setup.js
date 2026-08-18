import { test as setup } from "@playwright/test";

const authFile = "playwright/.auth/admin.json";

setup("Login as Admin with Google", async ({ page }) => {
  // เปิดหน้า Login
  await page.goto("/sign-in");

  // หยุดไว้เพื่อให้ Login Google ด้วยตัวเอง
  await page.pause();

  // หลัง Login สำเร็จ รอให้เข้าสู่หน้า Admin
  await page.waitForURL("**/admin");

  // บันทึก Session
  await page.context().storageState({
    path: authFile,
  });
});
