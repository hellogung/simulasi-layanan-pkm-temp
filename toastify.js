// Utils ini dibuat untuk memudahkan dalam pembuatan notifikasi menggunakan library toast

// Style dan Script Toast.js wajib di import

class Toast {
    constructor() {
        this.colours = {
            primary: "#4b38b3",
            secondary: "#3577f1",
            success: "#45CB85",
            warning: "#ffbe0b",
            danger: "#f06548",
            info: "#299CDB",
            light: "#f5f5f5",
            dark: "#2e2e2e"
        };
    }

    show(text = "Input Text", status = "", object = {}) {
        const option = {
            text: text,
            newWindow: true,
            close: true,
            gravity: "top", // `top` or `bottom`
            position: "center", // `left`, `center` or `right`
            stopOnFocus: true, // Prevents dismissing of toast on hover
            style: { background: this.colours[status] },
            duration: 3000,
            escapeMarkup: false,
            onClick: function () { }, // Callback after click
               className: status == "light" ? "text-dark" : ""
            //   destination = ""
        };

        // Assign object from parameter
        Object.assign(option, object);

        Toastify(option).showToast();
    }
}