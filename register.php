<?php

require_once "db_connect.php";

if ($_SERVER["REQUEST_METHOD"] == "POST") {

    $user = trim($_POST["username"]);
    $pass = $_POST["password"];
    $confirm_pass = $_POST["confirm_password"];

    /* Username length validation */
    if (strlen($user) < 8 || strlen($user) > 18) {
        header("Location: register.html?error=usernameError");
        exit();
    }

    /* Password length validation */
    if (strlen($pass) < 8 || strlen($pass) > 18) {
        header("Location: register.html?error=passwordError");
        exit();
    }

    /* Username and password cannot be identical */
    if ($user === $pass) {
        header("Location: register.html?error=sameUserPass");
        exit();
    }

    /* Password must contain at least one special character */
    if (!preg_match('/[\W_]/', $pass)) {
        header("Location: register.html?error=specialChar");
        exit();
    }

    /* Password confirmation check */
    if ($pass !== $confirm_pass) {
        header("Location: register.html?error=passwordMismatch");
        exit();
    }

    /* Check if username already exists */
    $stmt = $conn->prepare("SELECT id FROM users WHERE username = ?");
    $stmt->bind_param("s", $user);
    $stmt->execute();

    $result = $stmt->get_result();

    if ($result->num_rows > 0) {
        /* Security: Generic feedback key to prevent user enumeration / leaking existing accounts */
        header("Location: register.html?error=regFailed");
        exit();
    }

    $stmt->close();

    /* Encrypt password securely using BCRYPT */
    $hashed_password = password_hash($pass, PASSWORD_BCRYPT);

    /* Insert new user into the database */
    $stmt = $conn->prepare(
        "INSERT INTO users (username, password) VALUES (?, ?)"
    );

    $stmt->bind_param("ss", $user, $hashed_password);

    if ($stmt->execute()) {
        header("Location: login.html?success=regSuccess");
        exit();
    } else {
        header("Location: register.html?error=generalError");
        exit();
    }

    $stmt->close();
    $conn->close();

}

?>