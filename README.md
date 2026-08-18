# SPRS Admin Dashboard - Playwright

สคริปต์นี้สร้างจาก source code จริงของ T-Check frontend

## หน้าและ route ที่ตรวจสอบ
- Login: `/sign-in`
- Admin Dashboard: `/admin/overview`
- Admin API: `/api/dashboard/admin/overview`
- Recent Users API: `/api/dashboard/admin/users`

## ก่อนรัน
ติดตั้ง dependency:
```bash
npm install
npx playwright install chromium
```

ตั้งค่า:
```bash
set PLAYWRIGHT_BASE_URL=http://localhost:5173
set ADMIN_IDENTITY=บัญชี Admin
set ADMIN_PASSWORD=รหัสผ่าน
```

หรือใช้ PowerShell:
```powershell
$env:PLAYWRIGHT_BASE_URL="http://localhost:5173"
$env:ADMIN_IDENTITY="บัญชี Admin"
$env:ADMIN_PASSWORD="รหัสผ่าน"
```

## รัน
```bash
npm run test:admin
```

## เปิด Report
```bash
npm run report
```

Playwright config เปิด `video: 'on'` ดังนั้นผลการทดสอบจะมี Video แนบใน test result/report

## หมายเหตุจากการตรวจ source code
หน้า `AdminOverviewPage.jsx` ไม่มีข้อความ `ยังไม่มีข้อมูลการใช้งาน`
แต่กรณี recent users ว่างจะแสดง `ไม่พบข้อมูลผู้ใช้งาน`
ดังนั้น TC-ADM-003 ในสคริปต์จึงทดสอบพฤติกรรมที่มีอยู่จริงของหน้าเว็บ
