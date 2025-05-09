function delivringPizza() {
    console.log("Preparing...");
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve();
        }, 1000);
    })
}

async function deliver() {
    await delivringPizza();
    console.log("Delivered!");
}

deliver();