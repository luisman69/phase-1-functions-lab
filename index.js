// Code your solution in this file!



function distanceFromHqInBlocks(yourBlock) {
    const lejos = Math.abs(yourBlock-42)
    console.log(lejos)
    return lejos
}

distanceFromHqInBlocks(43)



function distanceFromHqInFeet(yourBlock) {
const lejosInfeet = distanceFromHqInBlocks(yourBlock)*264
console.log(lejosInfeet)
return lejosInfeet
}

distanceFromHqInFeet(43)

function distanceTravelledInFeet(start,end) {
const tripInfeet = Math.abs(start-end)*264
console.log(tripInfeet)
return tripInfeet
}

distanceTravelledInFeet(43,53)
distanceTravelledInFeet(53,43)

function calculatesFarePrice(start, end) {
const tripInfeet = Math.abs(start-end)*264

if (tripInfeet<=400) {
    return 0
}
if (tripInfeet>=2500) {
    return 'cannot travel that far'
}

if (tripInfeet>=400 && tripInfeet<=2000) {
    const tripCost = (((tripInfeet-400)*2)/100)
    return tripCost
}
if (tripInfeet>=2000 && tripInfeet<=2500) {
    const tripCost = 25
    return tripCost
}

}
