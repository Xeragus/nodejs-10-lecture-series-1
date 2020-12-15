$(document).ready(() => {
  let notifier = new AWN();

  $('.create-reservation').on('submit', (e) => {
    e.preventDefault()
    $.ajax({
      url: '/reservations',
      type: 'POST',
      data: $(e.target).serialize(),
      success: (response) => {
        if (response.error) {
          console.log(response)
        } else {
          $(`#create_reservation_${response.restaurant_id}`).modal('toggle');
          notifier.success('Reservation request sent to restaurant!');
        }
      }
    })

  })
})
