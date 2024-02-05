function secretPassword(input) {
    let password = input[0];
    if (password == "s3cr3t!P@ssw0rd") {
        console.log("Welcome");
    } else {
        console.log("Wrong password!");
    }


}

secretPassword(["qwerty"])
secretPassword(["s3cr3t!P@ssw0rd"])
secretPassword(["s3cr3t!p@ss"])
