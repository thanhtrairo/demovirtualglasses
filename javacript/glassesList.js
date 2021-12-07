
export class GlassesList {
    constructor() {
        this.glist = []
    }
    addGlasList(glasses) {
        this.glist.push(glasses)
    }
    renderGlasses() {
        const htmls = this.glist.map((glasses) => {
            return `
            <div class="col-4">
                <img class="img-fluid vglasses__items" onclick="tryOnGlasses(event)" id="${glasses.id}" src="${glasses.src}" alt="Glasses">
            </div>
            `
        }).join('')
        return htmls
    }
}

