$(document).ready(function() {
    $(".generate_qr").click(function() {
        $(".error").text(""); // Clear previous errors
        var name = $(".name").val().trim();
        var number = $(".number").val().trim();
        var email = $(".email").val().trim();
        var valid = true;

        // Full Name Validation (Only letters, no empty)
        if (name === "" || !/^[a-zA-Z\s]+$/.test(name)) {
            $(".name-error").text("Enter a valid full name.");
            valid = false;
        }

        // WhatsApp Number Validation (Must start with + and have at least 10 digits)
        if (!/^\+\d{10,15}$/.test(number)) {
            $(".number-error").text("Enter a valid WhatsApp number with ISD (e.g., +919876543210).");
            valid = false;
        }

        // Email Validation
        if (!/^\S+@\S+\.\S+$/.test(email)) {
            $(".email-error").text("Enter a valid email address.");
            valid = false;
        }

        if (!valid) return; // Stop if validation fails

        $(".form").hide();
        $(".qr_code").show();

        var link = "upi://pay?pa=7387560447@ibl&pn=Ismart%20SOWR ABH&mc=0000&mode=02&purpose=00" + number;
        var upi = "https://chart.googleapis.com/chart?chs=200x200&cht=qr&chl=" + encodeURIComponent(link);
        $(".get_qr").attr("src", upi);
    });

    $(".download_now").click(function() {
        $(".error").text(""); // Clear previous errors
        var id = $(".id").val().trim();
        var valid = true;

        // Transaction ID Validation (Must be a non-empty number)
        if (!/^\d+$/.test(id)) {
            $(".id-error").text("Enter a valid transaction ID.");
            valid = false;
        }

        if (!valid) return; // Stop if validation fails

        alert("Payment Confirmed!");
    });
});
