document.addEventListener("DOMContentLoaded", function () {
  const toggleButton = document.getElementById("menu-toggle");
  const navLinks = document.querySelector("nav ul");
  
  // التبديل بين إظهار وإخفاء القائمة
  toggleButton.addEventListener("click", () => {
    navLinks.classList.toggle("show");

    // إضافة أو إزالة التفعيل على الزر لزيادة التفاعل البصري
    toggleButton.classList.toggle("active");
  });

  // إغلاق القائمة عند النقر على رابط داخل القائمة
  const navItems = navLinks.querySelectorAll("li a");
  navItems.forEach(item => {
    item.addEventListener("click", () => {
      navLinks.classList.remove("show");
      toggleButton.classList.remove("active");
    });
  });
});
