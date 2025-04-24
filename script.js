function validateForm() {
    let isValid = true;
  
    document.querySelectorAll(".error").forEach(el => el.textContent = "");
  
    const fullName = document.getElementById("fullName").value.trim();
    const email = document.getElementById("email").value.trim();
    const phone = document.getElementById("phone").value.trim();
    const consultationType = document.getElementById("consultationType").value;
  
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const phonePattern = /^[0-9]{11}$/;
  
    if (fullName === "") {
      document.getElementById("fullNameError").textContent = "Full name is required.";
      isValid = false;
    }
  
    if (!emailPattern.test(email)) {
      document.getElementById("emailError").textContent = "Please enter a valid email address.";
      isValid = false;
    }
  
    if (!phonePattern.test(phone)) {
      document.getElementById("phoneError").textContent = "Phone number must be exactly 11 digits.";
      isValid = false;
    }
  
    if (consultationType === "") {
      document.getElementById("consultationTypeError").textContent = "Please select a consultation type.";
      isValid = false;
    }
  
    if (isValid) {
      document.getElementById("consultationForm").reset();
  
      const toast = document.getElementById("toast");
      toast.classList.add("show");
  
      setTimeout(() => {
        toast.classList.remove("show");
      }, 5000);
    }
  
    return false; // Prevent actual submission
  }

