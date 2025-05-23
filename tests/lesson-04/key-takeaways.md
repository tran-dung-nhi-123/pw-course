# BUỔI 4

### 1. Phạm vi của biến: 

- switch…case : dùng khi cần check chính xác từng giá trị, 1 thì ntn,…
    
    switch (tham số) {
    
    case cond1:
    
    // cade cond1;
    
    break;
    
    case cond2:
    
    // code cond2;
    
    break;
    
    …..
    
    default:
    
    // code defaul;
    
    break;
    
    }
    
- =, == , === , !=
    
    = :  gán
    
    == :  so sánh lỏng lẻo, quan tâm tới giá trị k quan tâm tới kiểu giá trị
    
    === : chặt hơn, so sánh cả giá trị và kiểu dữ liệu
    
     != : ss không quan tâm tới kiểu dữ liệu
    
- For… in : lập ra các thuộc tính trong 1 object
    
    for ( let i in objects) {
    
    //code
    
    }
    
    - Lấy tên thuộc tính:
        VD:
        let student = {
            "name stdent": "Nhi",
            "age": 24,
            "job": {
                "job_title": :"QE",
                "companyAddress": "Cau Giay"
            }
        };
        for (let property in student) {
            console.log(property);
        };


        => KẾT QUẢ: 
        name student
        age
        job
    
    - Lấy giá trị:
        for (let property in student) {
            console.log(property);
            console.log(student[property]);
        };
        => KẾT QUẢ:
        Nhi
        24
        ### ??????????? thử in ra


- ForEach: Là 1 hàm hỗ trợ dùng cho mảng (chỉ dùng đc cho hàm) -- duyệt từng phần tử trong mảng để lấy data -- giống for nhưng hàm này đc java hỗ trợ ⇒ nhằm giảm độ dài code
    
    Cú pháp:
    
    arr.forEach(())
    
    VD:
    let fruits = ["banana", "orange", "apple"];
    fruits.forEach((value, index) => {
        console.log(value, index);
    })
    => KẾT QUẢ:
    banana 0
    orange 1
    apple 2
    

- For…of : mảng, string ⇒ in ra giá trị trong mảng, string
    
    giống for in ( dùng cho object) ⇒ in ra giá trị 
    
- Break , Continue
    - Break
        
        break thóa ra khỏi và dừng lại
        
    - Continue
        
        Thoát ra xong cộng thêm 1 đơn vị và tiếp tục vong lặp
        
# 2. Javascript_ Util function

- Là hàm tiện ích có sẵn giúp code nhanh hơn

- 2 dạng: string utill, array utill
    - String: str = “      Hello K14 class”
        - trim( ) : loại bỏ space ( khoản trống) đầu cuối string
            
            vd: console.log(str.trim()); 
            
        - toLowerCase( ) : chuyển ký tự sang viết thường
            
            
        - toUpperCase( ) : chuyển ký tự sang viết hoa
            
            <<< toLocaleUpperCase( ): uppercase trong phạm vi nhỏ … >>>
            
        - includes( ) : hàm kiểm tra chuỗi có chưa chuỗi con bên trong không ⇒ trả về: true hoặc false
            
            console.log(str.includes(”class”));
            
        
        - Replace( ) : thay thế 1 chuỗi con bằng 1 chuỗi khác bán đầu
            
            str = str.replace(”K14”, “K15”);

            - **Thay cho tất cả**
            str = str.replace(/K14/g, “K15”);
            
            ⇒ “ Hello K15 class”
            
        - Split( ) : chia chuỗi ban đầu thành các chuỗi con dựa trên ký tự phân chia ( delimiter) ⇒ đưa các chuỗi con thành 1 mảng
            
            let words = str.split(" ");
            
            ⇒ KẾT QUẢ: ['Hello', 'K14', 'class']
            
        - substring( ) : chuỗi con trả về 1 phần của chuỗi, bắt đầu từ số index đc chỉ định đến số index kết thúc
            - index bắt đầu từ 0 nhé
            
            console.log(str.substring(0,9);  ⇒ Hello K14
            
            chỉ có 1 số ⇒ chạy từ số đó tới cuối ⇒ vd: console.log(str.substring(6); ⇒ K14 class
            
        - indexOf() trả về vị trí đầu tiên của chuỗi con trong chuỗi ban đầu, nếu k tìm thấy trả về -1
            
            vd: console.log(str.indexOf(”K14”));  ⇒ 6
            
             console.log(str.indexOf(”K15”));  ⇒ -1 
            
        - Hàm map( ) : tạo 1 mảng mới bằng cách áp 1 hàm lên từng phần tử của mảng gốc
            
            vd: 
            let arr = ["Nhung", "Nhi", "Ha"];
            let upperName = arr.map(nameValue => nameValue.toUpperCase());
            console.log(upperName);
            
            => KẾT QUẢ: ['NHUNG', 'NHI', 'HA']
            
        - Filter ( ): tạo 1 bảng mới chỉ gồm những phần tử thỏa mãn điều kiện chỉ định
            VD:
            let arr = [1,2,3,4,5];
            let evenNumber = arr.filter(num => num % 2 === 0);
            console.log(evenNumber);
            => KẾT QUẢ: [2,4]
            
        - Find( ) : trả về giá trị phần tử **đầu tiên** thỏa mãn điều kiện, nếu k có ptu nào thỏa mãn trả về Undefined
        VD:
        let arr = [1,2,3,4,5];
        let evenNumber = arr.find(num => num % 2 === 0);
        console.log(evenNumber);
        => KẾT QUẢ: [2]
        
        - Reduce( ) : áp dụng từng phần tử trong mảng và trả về 1 kết quả duy nhất
        VD:
        let arr = [1,2,3,4,5];
        let sum = arr.reduce((total, num) => total + num,0);
        console.log(sum); 
        => KẾT QUẢ: 15

        - Some ( ): check có tồn tại phần tử nào trong mảng k nếu có trả về true, k có trả về false
        VD:
        let arr = [1,2,3,4,5];
        let checkNum = arr.some(num => num > 6);
        console.log(checkNum);
        => False

        - Every ( ): check toàn bộ phần tử trong mảng xem có thỏa mãn điều kiện hay không ⇒ tất cả thỏa mãn true, không thì trả về false
        
        let arr = [2,4,6];
        let checkNum = arr.every(num => num > 6);
        console.log(checkNum);
        => True
        
        - Push( ) : thêm 1 hoặc nhiều phần tử vào phía cuối mảng và trả về độ dài mảng mới
        VD:
        let arr = [1,2,3,4,5];
        arr.push(1,3);
        console.log(arr);
        => KẾT QUẢ: [1,2,3,4,5,1,3]
        
        - Để trả thêm độ dài:
        console.log(arr.push(1,3));
        => 7
        
        - Shift( ) : loại bỏ phần tử đầu tiên của mảng và trả về phần tử đấy ⇒ có thay đổi mảng
        VD:   
        let arr = [1,2,3,4,5];
        console.log(arr.shift());
        console.log(arr);
        => KẾT QUẢ: [2,3,4]
            
        - Sort( ) : sx phần từ trong mảng theo từ điển Unicode ⇒ nếu dùng số nó chỉ xét ký tự đầu nên 10 xếp đầu tiên ⇒ chỉ nên dùng cho chữ ⇒ Lý thuyết: chuyển phần tử về dạng chuỗi rồi mới so sánh chuỗi ⇒ sắp xếp
        let arr = [6,2,7,4,5];
        console.log(arr.sort());
        => KẾT QUẢ: [2,4,5,6,7]

        - Pop( ): Xóa phần tử cuối cùng trong mảng
        VD:
        let arr = [1, 2, 3];
        let last = arr.pop();
        console.log(last);
        => KẾT QUẢ: [1,2]

        - Unshift(): Thêm một hoặc nhiều phần tử vào đầu mảng, trả về độ dài mới của mảng, làm thay đổi mảng gốc.
        VD:
        let arr = [1, 2, 3];
        arr.unshift(0); 
        console.log(arr);
        => KẾT QUẢ: [0, 1, 2, 3]

### Kiểu của 1 biến: 
typeof student[key] === 'number'
