class wateraStuff extends THREE.Group{
    constructor(){
        super();

        this.items = Array.from({length: 50}. () => {
            const items =new THREE.Mesh(
                new THREE.CapsuleGeometry(0.25, 2, 3, 7, 3),
                new THREE.MeshBasicMaterial({wireframe: true, color: "#068"})
            )
            );
            this.setRandom(items, 50 - Math.random() * 100);
            this.add(item);
            return item;
        })
}