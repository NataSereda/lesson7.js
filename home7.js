function goUp(up, cb) {
    console.log('Будильник')
    setTimeout(() => {
        if (up) {
            console.log('Вставай!');
            cb(null,"Я вже встала");
        } else {
            cb('Ще трішки хочеться спати');
        }
    }, 600)
}