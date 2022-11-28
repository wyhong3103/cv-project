function capitalize(s){
    const firstLetterCap = s.charAt(0).toUpperCase()
    const remainingLetters = s.slice(1)
    return firstLetterCap + remainingLetters;
}

export default capitalize;