import Swal from "sweetalert2";

export function TermsNotChecked({ setShowTermsModal }) {
    Swal.fire({
        title: "Warning",
        text: "You must agree with the terms and conditions.",
        icon: "warning",
        confirmButtonColor: "#86CCEB",
        confirmButtonText: "Ok",
    }).then(() => {
        setShowTermsModal(false);
    });
}

export function SubmitSuccess({ setSignupSuccess }) {
    Swal.fire({
        title: "Success",
        text: "Your Information submitted successfully.",
        icon: "success",
        confirmButtonColor: "#86CCEB",
        confirmButtonText: "Ok",
    }).then(() => {
        setSignupSuccess(false);
    });
}
