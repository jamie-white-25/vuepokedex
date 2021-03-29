import { ref } from "@vue/reactivity";

const validatedRegion = async (region) => {
    const validatedRegion = ref(null);
    switch (region) {
        case "kanto":
            validatedRegion.value = 1;
            break;
        case "johto":
            validatedRegion.value = 2;
            break;
        case "hoenn":
            validatedRegion.value = 3;
            break;
        case "sinnoh":
            validatedRegion.value = 4;
            break;
        case "unova":
            validatedRegion.value = 5;
            break;
        case "kalos":
            validatedRegion.value = 6;
            break;
        case "alola":
            validatedRegion.value = 7;
            break;
        case "galar":
            validatedRegion.value = 8;
            break;
        default:
            break;
    }

    return validatedRegion;
};


export default validatedRegion;
