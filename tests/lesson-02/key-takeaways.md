1. VCS ( )
- Local: Máy cá  nhân
- Centralize: Máy chủ tập chung (vd: docs,…)
- Distributed: (vd: git,…)

1. Git
- Dùng git để quản lý các phiên bản và nhiều người làm với nhau
- Ưu điểm: dùng git vì khá dễ dùng, branchungs, xử lý nhanh, free, phổ biến nhiều công ty
- SS git và github:

-  Git: là phần mềm trên máy tính, commandline tool, giúp quản lý phiên bản đưa file vào git repo…

- GitHub: có công cụ, có giao diện, là nơi để up git repo

* 3 VÙNG LÀM VIỆC CỦA GIT:

![image.png](attachment:47b31681-266f-424b-a8ac-2a55cdb1e827:image.png)

- Đc commit là ntn ? Là khi chỉnh sửa commit ⇒ tạo ra 1 phiên bản khác
- Tạo 3 file: Chưa đc quản lý bởi git
- Sau khi chạy <Git init> ⇒ 3 file mới đc git quản lý thuộc vùng working directory  (( Với lần đầu thì cần init còn các lần sau nó đã nằm ở Working directory r ⇒ K cần khởi tạo lại ))
- Sau khi chạy <Git add> ⇒ Sang vùng staging area ⇒ tạo 1 bản sao ở staging tại thời điểm chạy git add . >
- Chạy < git commit -m “Tên phiên bản muốn tạo” > ⇒ tạo thành công 1 phiên bản  ở vùng repository ⇒ Vùng staging sẽ trống

![image.png](attachment:dd64504c-6778-4fa3-878c-174b9e6b145b:image.png)

***** Các câu lệnh thường dùng với git

- Khởi tạo: git init (chỉ cần lần đầu khi mới tạo repo)
- Cấu hình:

- git add <file name> : 1 file

- git add . : tất cả các file

* Chạy < git status > để xem trang thái file đang ở vùng nào:

- U: Working directory (Đỏ)

- A: Staging (Xanh)

- Sau khi commint thành công thì file k còn hiện nữa

![image.png](attachment:3abc60df-318c-4051-9959-65314aa7f4b5:image.png)

- Đúng chính xác ở thư muc

![image.png](attachment:cc12efcd-87d3-40db-b5b2-6ed1bc213cc3:image.png)

chọn thư mục ⇒ chọn Git bash

code . : mở vscode

- Commit convention: bộ quy tắc để đặt tên commit message

![image.png](attachment:83e89a6b-c1df-43c0-bc22-b23da9a2ef54:image.png)

- Workflow đơn giản:

![image.png](attachment:ce9ef12d-9d64-4440-b397-2d7b3a7d3030:image.png)

- init: chỉ cần khởi tạo lần đầu
- config: thay đổi gì mới cần

Global config: là những cái đã mặc định sẵn ở global

1. Javascript

![image.png](attachment:f65c6f52-43d7-4de4-8404-b7334c2090de:image.png)

- runtime: khi chạy thì
- time
- Cách chạy:

![image.png](attachment:0370ebe7-5676-471b-b1ed-40d7f4a64df1:image.png)

note:   Ctrl + /

- 

var: khai báo lại đc

let: k khai báo lại đc

![image.png](attachment:a6aa469d-ad01-4ab9-9ca9-af111eae8ef3:image.png)

- Biến và hằng số:

![image.png](attachment:c898545f-a018-461c-b1c8-70ce549dd8ff:image.png)

- Kiểu dữ liệu:

![image.png](attachment:30fbc20e-c83d-4777-bb37-5a3b444ca027:image.png)

gán như v sẽ tự hiểu name là string, age là number, isBool là kiểu boolean

hover vào sẽ hiện kiểu dữ liệu

- Toán tử so sánh:

- để fomat: chuột phải ⇒ chọn format documnet