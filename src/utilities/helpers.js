import Swal from 'sweetalert2';
import useClipboard from 'vue-clipboard3';

const sweetAlert = (icon = 'success', title = 'Alert successfully') => {
    const Toast = Swal.mixin({
        toast: true,
        position: 'top-right',
        showConfirmButton: false,
        timer: 3000,
        timerProgressBar: true,
        didOpen: (toast) => {
            toast.addEventListener('mouseenter', Swal.stopTimer)
            toast.addEventListener('mouseleave', Swal.resumeTimer)
        }
    });

    Toast.fire({
        icon: icon,
        title: title
    });
}

const copyToClipboard = (text) => {
    const {toClipboard} = useClipboard(),
        copy = toClipboard(text);

    return {copy}
}

export {
    sweetAlert,
    copyToClipboard
}