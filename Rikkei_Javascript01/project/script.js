const btn = document.querySelector(".btn");// lấy dữ liệu từ button
const container = document.querySelector(".container"); // lấy dữ liệu từ màu nền chính trang web


const savedMode = localStorage.getItem("mode"); // lấy thông tin của nút bấm 

if (savedMode === "dark") {  
    container.classList.add("dark"); // thêm class dark vào class list của class container => dùng để thay đổi trạng thái trang web 
    btn.textContent = "☀️";// thêm text là icon mặt trời khi class chuyển thành dark
} else {
    btn.textContent = "🌙"; 
}

btn.addEventListener("click", function () {  // hàm nghe thông tin từ người dùng 
    container.classList.toggle("dark");  // dùng để bật tắt =>> nghĩa là nếu không có class dark nó sẽ tự động thêm vào còn nếu có thì sẽ xóa đi 

    if (container.classList.contains("dark")) {
        btn.textContent = "☀️";
        localStorage.setItem("mode", "dark");   // kiểm tra và lưu dữ liệu vào hệ thống
    } else { 
        btn.textContent = "🌙";
        localStorage.setItem("mode", "light");
    }
});