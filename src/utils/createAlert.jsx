import Swal from "sweetalert2";

export const createAlert = (icon , text, timer) =>{
  return Swal.fire({
      title: text || "No Text",
      icon: icon || "error",
      timer: timer || null,
      confirmButtonText: "Confirm"
    });
}