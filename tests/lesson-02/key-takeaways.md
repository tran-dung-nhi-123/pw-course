# 1. VCS ( Version Control System)
- Local: Máy cá  nhân
- Centralize: Máy chủ tập chung (vd: docs,…)
- Distributed: Lưu nhiều máy khác nhau (vd: git,…)

# 2. Git
- Dùng git để quản lý các phiên bản và nhiều người làm với nhau
- Ưu điểm: dùng git vì khá dễ dùng, bản chung, xử lý nhanh, free, phổ biến nhiều công ty
- SS git và github:
    -  Git: là phần mềm trên máy tính, commandline tool, giúp quản lý phiên bản đưa file vào git repo…
    - GitHub: có công cụ, có giao diện, là nơi để up git repo

### * 3 VÙNG LÀM VIỆC CỦA GIT: 
    - Working Directory: Các file mới hoặc file có thay đổi
    - Staging Area: Các file đưa vào vùng chuânr bị commit (tạo ra các phiên bản)
    - Repository: Các commit (phiên bản)

- Đc commit là ntn ? Là khi chỉnh sửa commit ⇒ tạo ra 1 phiên bản khác
- Tạo 3 file: Chưa đc quản lý bởi git
- Sau khi chạy <Git init> ⇒ 3 file mới đc git quản lý thuộc vùng working directory  (( Với lần đầu thì cần init còn các lần sau nó đã nằm ở Working directory r ⇒ K cần khởi tạo lại ))
- Sau khi chạy <Git add> ⇒ Sang vùng staging area ⇒ tạo 1 bản sao ở staging tại thời điểm chạy git add . >
- Chạy < git commit -m “Tên phiên bản muốn tạo” > ⇒ tạo thành công 1 phiên bản  ở vùng repository ⇒ Vùng staging sẽ trống


**Các câu lệnh thường dùng với git**
- Khởi tạo: git init (chỉ cần lần đầu khi mới tạo repo)
- Cấu hình:
    - git add <file name> : 1 file
    - git add . : tất cả các file

* Chạy < git status > để xem trang thái file đang ở vùng nào:
- U: Working directory (Đỏ)
- A: Staging (Xanh)
- Sau khi commint thành công thì file k còn hiện ở vùng Staging nữa mà chỉ có ở vùng Repository


- Để đứng chính xác ở thư muc:
    chọn thư mục ⇒ chọn Git bash
    code . : mở vscode

- Commit convention: bộ quy tắc để đặt tên commit message
    <type>: <short_description>
    - type: loại commit
        - chore: sửa nhỏ lẻ, chính tả, xóa file không dùng tới,...
        - feat: thêm tính năng mới, test case mới
        - fix: sửa lỗi 1 test trước đó
    - short_description: mô tả ngắn gọn (50 kí tự), tiếng Anh hoặc tiếng Việt không dấu.

- Workflow đơn giản:

![image.png](https://prnt.sc/L_ulBFK8khza)  // E không gán ảnh được :<<<

    - init: chỉ cần khởi tạo lần đầu
    - config: thay đổi gì mới cần

Global config: là những cái đã mặc định sẵn ở global

3. Javascript

- run-time: khi chạy thì
- time

- Biến và hằng số:
    - Biến: khái báo let (thường dùng), var
        + var: khai báo lại đc
        + let: k khai báo lại đc
    - Hằng số: khai báo const

- Kiểu dữ liệu: String, Number, Bigint, Boolean, Undefined,Null, Symbol, Object
    + Gán như v sẽ tự hiểu name là string, age là number, isBool là kiểu boolean
    + hover vào sẽ hiện kiểu dữ liệu


- để fomat: chuột phải ⇒ chọn format documnet


### Toán tử
+, -, *, % (chia lấy dư), / (chia lấy nguyên), ++, --, ===, 
### Vòng lặp 
for(let i=1;i<n;i++>){
    ...
}

