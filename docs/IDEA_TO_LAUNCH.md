# Huong Dan Tu Y Tuong Den Website Hoan Chinh

Tai lieu nay la quy trinh su dung repo hien tai de bien mot y tuong thanh website co the chay, test, review va deploy. Dung no nhu "playbook" chinh khi lam viec voi agent.

## 0. Chuan Bi Moi Phien Lam Viec

Mo terminal tai thu muc project:

```bash
cd D:\Manhinh\digital
npm run dev
```

Mo website:

```text
http://localhost:3000
```

Truoc khi giao viec cho agent, yeu cau agent doc:

- `AGENTS.md`
- `docs/PRODUCTION_PLAYBOOK.md`
- `docs/AGENT_STACK.md`
- `docs/DISCOVERY.md`
- `docs/PRODUCT_BRIEF.md`
- `docs/SPEC.md`
- `docs/CONTENT_SEO.md`
- `docs/HARNESS.md`
- `docs/FEATURE_INTAKE.md`
- `docs/TEST_MATRIX.md`
- `docs/DESIGN_QA.md`
- `docs/WORKFLOW.md`
- `docs/MEMORY_POLICY.md`
- `docs/RELEASE_CHECKLIST.md`
- `docs/LAUNCH.md`
- `docs/DEPLOYMENT.md`
- `docs/POST_LAUNCH.md`

Prompt nen dung:

```text
Hay doc AGENTS.md va docs/PRODUCTION_PLAYBOOK.md. Sau do tom tat active gate, source hierarchy, stop conditions, verify commands, va cac artifact can co truoc khi code. Chua code gi cho den khi toi dua brief.
```

## 1. Discovery: Tu Y Tuong Tho Den Product Brief

Muc tieu cua buoc nay la bien y tuong mo ho thanh brief ro rang. Chua can code.

Ban dua y tuong tho cho agent, vi du:

```text
Toi muon lam website cho dich vu thiet ke noi that cao cap tai TP.HCM, khach hang la chu nha va chu can ho cao cap, can nhin sang, dang tin, co form lien he.
```

Sau do dung prompt:

```text
Hay phong van toi theo docs/DISCOVERY.md de bien y tuong tren thanh product brief cho website. Hoi tung nhom cau hoi ngan gon ve: doi tuong, muc tieu kinh doanh, de nghi chinh, trang can co, noi dung bat buoc, phong cach hinh anh, CTA, SEO, va rang buoc ky thuat. Sau khi hoi xong, cap nhat docs/DISCOVERY.md va docs/PRODUCT_BRIEF.md.
```

Thong tin can chot trong `docs/PRODUCT_BRIEF.md`:

- Ten thuong hieu hoac ten du an.
- Ai la nguoi xem chinh.
- Website can khien ho lam gi.
- San pham/dich vu chinh.
- Cac trang can co.
- Phong cach hinh anh va tone noi dung.
- CTA chinh.
- Yeu cau SEO.
- Deployment target.

Khong duoc nhay sang code khi nhung muc nay con trong, tru khi ban chap nhan ro mot assumption.

## 2. Tu Brief Thanh Spec, Content, SEO

Sau khi `docs/PRODUCT_BRIEF.md` da co noi dung, yeu cau agent tao spec.

Prompt:

```text
Tu docs/PRODUCT_BRIEF.md va docs/DISCOVERY.md, hay cap nhat docs/SPEC.md va docs/CONTENT_SEO.md thanh contract co the implement ngay. Spec can co: muc tieu, cau truc route, section tung trang, noi dung can hien thi, thanh phan UI chinh, trang thai responsive, SEO metadata, acceptance criteria, va nhung cau hoi con mo. Chua code.
```

Spec tot phai tra loi duoc:

- Website gom nhung route nao.
- Moi route co section gi.
- Moi section can noi dung nao.
- Data nao can hard-code tam thoi, data nao se lay tu CMS/API sau.
- UI can co trang thai desktop/mobile ra sao.
- The nao la xong.

Neu agent de lai `Open Product Decisions`, ban chot tiep truoc khi code.

## 3. Intake Va Story Packet

Muc tieu cua buoc nay la xac dinh task nay can bao nhieu quy trinh truoc khi code.

Prompt:

```text
Hay classify request nay bang docs/FEATURE_INTAKE.md. Neu la tiny thi noi ro vi sao co the patch truc tiep. Neu la normal thi tao hoac cap nhat mot story trong docs/stories/. Neu la high-risk thi tao folder high-risk story tu docs/templates/high-risk-story/ va hoi toi xac nhan truoc khi code.
```

Voi website thong thuong:

- Sua typo/copy nho: tiny.
- Them section/trang/form/SEO behavior: normal.
- Auth, payment, CRM, database, email provider, tracking sensitive data: high-risk.

## 4. Tu Spec Thanh Implementation Plan

Muc tieu cua buoc nay la chia viec nho de agent khong sua qua rong.

Prompt:

```text
Doc docs/SPEC.md va lap implementation plan theo tung slice nho. Moi slice phai co: file/area se sua, hanh vi can xong, test/verify can chay. Khong code cho den khi plan ro rang.
```

Thu tu slice khuyen nghi:

1. Thong tin site: metadata, route, layout.
2. Homepage: hero, navigation, CTA.
3. Cac section noi dung: services/product/process/proof/contact.
4. Responsive va accessibility.
5. SEO va performance co ban.
6. Playwright smoke tests.
7. Final polish.

Quy tac: moi slice phai co ket qua nhin thay hoac test duoc.

## 5. Implement Tung Slice

Khi plan da ro, cho agent code tung phan.

Prompt cho slice dau:

```text
Implement slice 1 trong plan. Chi sua nhung file lien quan. Sau khi xong, chay npm run typecheck va npm run lint, roi bao lai file da sua va ket qua verify.
```

Prompt cho cac slice tiep:

```text
Tiep tuc implement slice tiep theo trong plan. Giu dung AGENTS.md, uu tien UI responsive, accessible, khong them abstraction neu chua can. Sau khi xong chay verify phu hop.
```

Sau moi slice, kiem tra:

- Trang co hien dung noi dung khong.
- CTA co ro khong.
- Mobile co bi vo layout khong.
- Text co bi chen, tran, overlap khong.
- Agent co sua file ngoai scope khong.

## 6. Review Bang Browser Va E2E

Dung lenh:

```bash
npm run typecheck
npm run lint
npm run build
npm run e2e
```

Hoac full:

```bash
npm run verify
```

Neu sap release hoac deploy:

```bash
npm run verify:release
```

Prompt review:

```text
Hay review website nhu mot senior frontend engineer. Mo localhost:3000, kiem tra desktop va mobile. Tap trung vao bug, responsive, accessibility, SEO metadata, CTA, noi dung thieu, va test gap. Neu co loi, sua theo thu tu uu tien va chay npm run verify.
```

Voi nguoi dung kho tinh, dung prompt chat hon:

```text
Dung docs/DESIGN_QA.md de review nhu production QA. Kiem tra desktop 1440x900, tablet 768x1024, mobile 390x844, nav, CTA, overflow, focus, heading, console errors. Khong chap nhan "nhin co ve on"; phai neu evidence va sua blocker.
```

Khi review UI, yeu cau agent dung Browser/Playwright de kiem tra:

- Desktop viewport.
- Mobile viewport.
- Navigation anchors.
- CTA links.
- Heading structure.
- Form/contact flow neu co.

Sau khi verify, cap nhat `docs/TEST_MATRIX.md` bang bang chung thuc te:

```text
Hay cap nhat docs/TEST_MATRIX.md cho cac behavior vua thay doi. Chi danh dau implemented neu da co evidence tu test/build/browser check.
```

Neu la release, high-risk, hoac production fix, tao validation report:

```text
Tao docs/validation/YYYY-MM-DD-short-scope.md tu docs/templates/validation-report.md. Ghi command results, browser evidence, console status, SEO/accessibility/performance notes, va gap con lai.
```

## 7. Luu Memory Dung Cach

Sau khi co quyet dinh on dinh, moi luu vao agentmemory. Khong luu moi y tuong tam thoi.

Prompt:

```text
Hay luu vao agentmemory nhung quyet dinh ben vung cua project nay: stack, cau truc route, design direction, lenh verify, va nhung convention quan trong. Khong luu secrets, log tam thoi, hoac thong tin ca nhan.
```

Nen luu:

- Stack: Next.js App Router, TypeScript, Tailwind, Playwright.
- Route structure.
- Brand/design direction da chot.
- Deployment target.
- Cach verify.

Khong luu:

- API keys.
- Mat khau.
- Noi dung khach hang rieng tu.
- Loi tam thoi da het y nghia.

Neu co quyet dinh ben vung, tao decision record truoc khi luu memory:

```text
Neu task nay co quyet dinh ben vung, tao file trong docs/decisions/ theo docs/templates/decision.md. Sau do chi luu tom tat quyet dinh do vao agentmemory.
```

## 8. Chuan Bi San Pham Cuoi Va Release

Truoc khi deploy, yeu cau agent lam final pass.

Prompt:

```text
Hay lam final launch pass bang docs/RELEASE_CHECKLIST.md. Kiem tra noi dung, SEO, responsive, accessibility, console/browser errors, build output, Playwright tests, README, TEST_MATRIX, story evidence, deployment assumptions. Sua nhung loi can thiet, khong refactor ngoai scope. Cuoi cung chay npm run verify:release.
```

Checklist san pham cuoi:

- `npm run verify:release` pass.
- `npm audit --audit-level=moderate` khong co vulnerability can xu ly ngay.
- Metadata co title/description dung.
- Link va CTA dung dich.
- Mobile va desktop deu dung.
- Khong co `.env` bi commit.
- README co cach chay project.
- Brief/spec phan anh dung san pham da build.
- `docs/LAUNCH.md` co status dung va sign-off fields duoc cap nhat.
- Neu la release that, co validation report trong `docs/validation/`.

## 9. Deploy

Neu deploy len Vercel, workflow toi thieu:

1. Tao repo GitHub.
2. Push project.
3. Import vao Vercel.
4. Set environment variables neu co.
5. Deploy.
6. Kiem tra URL production bang Playwright hoac browser.

Prompt deploy prep:

```text
Hay chuan bi project de deploy Vercel bang docs/DEPLOYMENT.md. Kiem tra package scripts, Next config, env example, domain, DNS, build setting, smoke test, rollback. Neu thieu gi thi sua. Chua push hoac deploy neu toi chua yeu cau.
```

Sau deploy, bat buoc chay post-launch:

```text
Dung docs/POST_LAUNCH.md de review production URL. Kiem tra homepage, CTA, mobile, console errors, monitoring/analytics/form neu co, va tao backlog/story cho moi issue.
```

## 10. Chuoi Prompt Mau Day Du

Dung chuoi nay khi bat dau mot website moi:

```text
Doc AGENTS.md va docs. Chua code.
```

```text
Day la y tuong cua toi: [dan y tuong]. Hay phong van toi de tao product brief.
```

```text
Cap nhat docs/PRODUCT_BRIEF.md tu thong tin da chot.
```

```text
Tu product brief, cap nhat docs/SPEC.md va docs/CONTENT_SEO.md thanh spec implement duoc. Chua code.
```

```text
Classify request bang docs/FEATURE_INTAKE.md. Tao story packet neu can.
```

```text
Lap implementation plan theo slice nho. Moi slice co acceptance criteria va verify command.
```

```text
Implement slice 1. Chi sua file can thiet. Chay typecheck/lint sau khi xong.
```

```text
Tiep tuc cac slice con lai. Sau moi slice bao file sua va verify.
```

```text
Mo localhost:3000 va review desktop/mobile. Sua loi UI, responsive, accessibility.
```

```text
Chay npm run verify:release. Sua blocker neu co.
```

```text
Cap nhat docs/TEST_MATRIX.md va story evidence theo ket qua verify.
```

```text
Luu nhung quyet dinh ben vung vao agentmemory theo docs/MEMORY_POLICY.md.
```

## 11. Khi Nao Nen Dung Superpowers, ECC, agentmemory, Harness

Dung Superpowers khi:

- Can brainstorm.
- Can spec.
- Can implementation plan.
- Can TDD/debug/review.

Dung ECC skill chon loc khi:

- Lam UI phuc tap.
- Can Next.js/Turbopack pattern.
- Can E2E testing.
- Can security review.
- Can verification loop.

Dung agentmemory khi:

- Da co quyet dinh ben vung.
- Can agent nho convention cho phien sau.
- Can recall ly do kien truc hoac bug da fix.

Dung Harness khi:

- Can classify task truoc khi code.
- Can story packet cho mot slice.
- Can map behavior sang test proof.
- Can luu decision record trong repo.

Dung production playbook khi:

- Can biet dang o gate nao.
- Can stop condition truoc khi code/deploy.
- Can launch checklist va post-launch loop.

Khong dung ca ba nhu ba nguon lenh ngang hang. Thu tu uu tien:

1. `AGENTS.md` cua repo.
2. `docs/PRODUCTION_PLAYBOOK.md`.
3. Superpowers workflow.
4. Spec trong `docs/SPEC.md`.
5. Harness docs: intake, stories, test matrix, decisions.
6. ECC skill lien quan.
7. agentmemory lam bo nho, khong lam nguon yeu cau moi.
