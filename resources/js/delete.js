$(function() {
    $('.delete').click(function() {
            Swal.fire({
                title: 'Czy na pewno chcesz usunąć rekord?',
                text: "Tej operacji nie można cofnąć",
                icon: 'warning',
                showCancelButton: true,
                confirmButtonColor: '#3085d6',
                cancelButtonColor: '#d33',
                confirmButtonText: 'Tak',
                cancelButtonText: 'Nie'
              }).then((result) => {
                if (result.value) {
                  $.ajax({
                    method: "DELETE",
                    url: deleteUrl + $(this).data("id")
                  })
            .done(function(data) {
                window.location.reload();
            })
            .fail(function(data) {
                Swal.fire('Oops...', data.responseJSON.message, data.responseJSON.status);
               });
            }
        })
    });
});
