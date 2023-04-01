const alphabet = 'ABCDEFGHIJKLMN'.split('');
const blockList = document.getElementById("block-list");

alphabet.forEach(letter => {
    const tr = document.createElement('tr');
    tr.innerHTML = `
        <td>Quadra ${letter}</td>
        <td>
            <i class="fas fa-lightbulb me-2 energy-icon" id="energy${letter}"></i>
        </td>
        <td>
            <i class="fas fa-wifi me-2 internet-icon" id="internet${letter}"></i>
        </td>
    `;
    blockList.appendChild(tr);
});

function updateIconColor(icon) {
    const letter = icon.id.slice(-1);
    const internetIcon = document.getElementById(`internet${letter}`);
    const energyIcon = document.getElementById(`energy${letter}`);

    if (icon.classList.contains('danger')) {
        icon.classList.remove('danger');
    } else {
        icon.classList.add('danger');
    }
}

$(document).ready(function() {
    $('.internet-icon, .energy-icon').on('click', function() {
        updateIconColor(this);
    });

    $('#select-all-internet').on('click', function() {
        $('.internet-icon').each(function() {
            if (!this.classList.contains('danger')) {
                this.classList.add('danger');
            }
        });
    });

    $('#select-all-energy').on('click', function() {
        $('.energy-icon').each(function() {
            if (!this.classList.contains('danger')) {
                this.classList.add('danger');
            }
        });
    });

    $('#deselect-all').on('click', function() {
        $('.internet-icon, .energy-icon').each(function() {
            if (this.classList.contains('danger')) {
                this.classList.remove('danger');
            }
        });
    });
});
