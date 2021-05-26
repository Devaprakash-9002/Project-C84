canvas = document.getElementById('myCanvas');
ctx = canvas.getContext("2d");

car1_width = 100;
car1_height = 60;

car2_width = 120;
car2_height = 70;

car1_x = 10;
car1_y = 10;

car2_x = 0;
car2_y = 85;

background_img = "racing.jpg";
car1_img = "car1.png";
car2_img = "car2.png";

function add() {
    background_imgTag = new Image();
    background_imgTag.onload = uploadBackground;
    background_imgTag.src = background_img;

    car1_imgTag = new Image();
    car1_imgTag.onload = uploadCar1;
    car1_imgTag.src = car1_img;

    car2_imgTag = new Image();
    car2_imgTag.onload = uploadCar2;
    car2_imgTag.src = car2_img;
}

function uploadBackground() {
    ctx.drawImage(background_imgTag, 0, 0, canvas.width, canvas.height);
}

function uploadCar2() {
    ctx.drawImage(car2_imgTag, car2_x, car2_y, car2_width, car2_height);
}

function uploadCar1() {
    ctx.drawImage(car1_imgTag, car1_x, car1_y, car1_width, car1_height);
}

window.addEventListener("keydown", my_keydown);
function my_keydown(e) {
    keyPressed = e.keyCode;
    console.log(keyPressed);
    if(keyPressed == '38') {
        up_car1();
        console.log("up1");
    }

    if(keyPressed == "87") {
        up_car2();
        console.log("up2");
    }

    if(keyPressed == '40') {
        down_car1();
        console.log("down1");
    }

    if(keyPressed == '83') {
        down_car2();
        console.log("down2");
    }

    if(keyPressed == '37') {
        left_car1();
        console.log("left1");
    }

    if(keyPressed == '65') {
        left_car2();
        console.log("left2");
    }

    if(keyPressed == '39') {
        right_car1();
        console.log("right1");
    }

    if(keyPressed == '68') {
        right_car2();
        console.log("right2");
    }
}

function up_car1() { 
    if(car1_y >=0) { 
        car1_y = car1_y - 10; 
        console.log("When up arrow is pressed, car 1's x = " + car1_x + " | y = " +car1_y); 
        uploadBackground(); 
        uploadCar1();
        uploadCar2(); 
    } 
}

function down_car1() { 
    if(car1_y <=600) { 
        car1_y = car1_y + 10; 
        console.log("When up down is pressed, car 1's x = " + car1_x + " | y = " +car1_y); 
        uploadBackground(); 
        uploadCar1();
        uploadCar2();
    } 
}

function left_car1() { 
    if(car1_x >=0) { 
        car1_x = car1_x - 10; 
        console.log("When up arrow is pressed, car 1's x = " + car1_x + " | y = " + car1_y); 
        uploadBackground(); 
        uploadCar1();
        uploadCar2();
    } 
}

function right_car1() { 
    if(car1_x <=800) { 
        car1_x = car1_x + 10; 
        console.log("When up arrow is pressed, car 1's x = " + car1_x + " | y = " + car1_y); 
        uploadBackground(); 
        uploadCar1();
        uploadCar2(); 
    }
}

function up_car2() { 
    if(car2_y >=0) { 
        car2_y = car2_y - 10; 
        console.log("When up arrow is pressed, car 2's x = " + car2_x + " | y = " + car2_y); 
        uploadBackground(); 
        uploadCar1();
        uploadCar2(); 
    }
}

function down_car2() { 
    if(car2_y <= 600) { 
        car2_y = car2_y + 10; 
        console.log("When up arrow is pressed, car 2's x = " + car2_x + " | y = " + car2_y); 
        uploadBackground(); 
        uploadCar1();
        uploadCar2(); 
    }
}

function left_car2() { 
    if(car2_x >=0) { 
        car2_x = car2_x - 10; 
        console.log("When up arrow is pressed, car 2's x = " + car1_x + " | y = " + car1_y); 
        uploadBackground(); 
        uploadCar1();
        uploadCar2();
    } 
}

function right_car2() { 
    if(car2_x <=800) { 
        car2_x = car2_x + 10; 
        console.log("When up arrow is pressed, car 2's x = " + car1_x + " | y = " + car1_y); 
        uploadBackground(); 
        uploadCar1();
        uploadCar2(); 
    }
}