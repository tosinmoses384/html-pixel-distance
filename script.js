const image = document.getElementById("image")
const result = document.getElementById("result")

let points = []

image.addEventListener("click", (event) =>{
    const rect = image.getBoundingClientRect();
    const x = event.clientX - rect.left;
    const y = event.clientY - rect.top;

    points.push({ x, y })

    if (points.length === 2) {
        const distance = calculateDistance(points[0], points[1])

        result.textContent = `Distance: ${distance.toFixed(2)} pixels`
        points = []       
    }
});

function calculateDistance(point1, point2) {
    const dx = point2.x - point1.x;

    const dy = point2.y - point1.y

    return Math.sqrt(dx * dx + dy * dy);
}