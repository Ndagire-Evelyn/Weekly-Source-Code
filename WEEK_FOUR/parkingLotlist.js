//parking lot represented as an array of objects
const parkingLot = [
  { id: 1, occupied: true, vehicle: 'Car' },
    { id: 2, occupied: false, vehicle: null },
    { id: 3, occupied: true, vehicle: 'Motorcycle' },
    { id: 4, occupied: false, vehicle: null },
    { id: 5, occupied: true, vehicle: 'Truck' },
    { id: 6, occupied:true, vehicle:'Camry' },
    { id: 7, occupied: true, vehicle: 'toyota' },
    { id: 8, occupied: false, vehicle: null },
    { id: 9, occupied: true, vehicle: 'Feriri' },
    { id: 10, occupied: true, vehicle: 'Sparo' },
    { id: 11, occupied: false, vehicle: null },
]

//function to list all occupied parking spaces
function listOccupiedSpaces(parkingLot) {
  return parkingLot.filter(space => space.occupied)
}

//function to list all unoccupied parking spaces
function listUnoccupiedSpaces(parkingLot) {
  return parkingLot.filter(space => !space.occupied)
}

console.log('Occupied Spaces:', listOccupiedSpaces(parkingLot))
console.log('Unoccupied Spaces:', listUnoccupiedSpaces(parkingLot))

// FUCTION TO ADD A VEHICLE TO A PARKING SPACE
function parkVehicle(parkingLot, spaceId, vehicle) {
  const space = parkingLot.find(space => space.id === spaceId)
    if (space && !space.occupied) {
        space.occupied = true
        space.vehicle = vehicle
        console.log(`Vehicle ${vehicle} parked in space ${spaceId}.`)
    }
    else {
        console.log(`Space ${spaceId} is already occupied or does not exist.`)
    }
}
console.log(parkVehicle(parkingLot, 2, 'Honda')) // Vehicle Honda parked in space 2.
console.log(parkVehicle(parkingLot, 3, 'BMW')) // Space 3 is already occupied or does not exist.

console.log('Updated Parking Lot:', parkingLot)

// FUNCTION TO REMOVE A VEHICLE FROM A PARKING SPACE
function removeVehicle(parkingLot, spaceId) {
  const space = parkingLot.find(space => space.id === spaceId)
    if (space && space.occupied) {
        space.occupied = false
        console.log(`Vehicle ${space.vehicle} removed from space ${spaceId}.`)
        space.vehicle = null
    }
    else {
        console.log(`Space ${spaceId} is already unoccupied or does not exist.`)
    }   
}

console.log(removeVehicle(parkingLot, 1)) // Vehicle Car removed from space 1.
console.log(removeVehicle(parkingLot, 5)) // Space 5 is already unoccupied or does not exist.

console.log('Updated Parking Lot:', parkingLot)

// FUNCTION TO COUNT THE NUMBER OF OCCUPIED AND UNOCCUPIED SPACES
function countSpaces(parkingLot) {
  const occupiedCount = parkingLot.filter(space => space.occupied).length
  const unoccupiedCount = parkingLot.filter(space => !space.occupied).length
  return { occupied: occupiedCount, unoccupied: unoccupiedCount }
}

console.log('Space Count:', countSpaces(parkingLot)) // Space Count: { occupied: 9, unoccupied: 2 }

