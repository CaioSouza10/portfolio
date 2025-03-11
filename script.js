function filtrarCursos() {
    const input = document.getElementById('searchInput');
    const filter = input.value.toLowerCase();
    const listaCursos = document.getElementById('listaCursos');
    const cursos = listaCursos.getElementsByTagName('li');

    for (let i = 0; i < cursos.length; i++) {
        const curso = cursos[i].innerText.toLowerCase();
        if (curso.includes(filter)) {
            cursos[i].classList.remove('hidden');
        } else {
            cursos[i].classList.add('hidden');
        }
    }
}

function toggleAccordion(sectionId) {
    const content = document.getElementById(sectionId);

    // Esconde todas as outras seções antes de abrir/fechar a clicada
    document.querySelectorAll('.accordion-content').forEach((item) => {
        if (item.id !== sectionId) {
            item.style.display = 'none';
        }
    });

    // Alterna a visibilidade da seção clicada
    if (content.style.display === 'block') {
        content.style.display = 'none';
    } else {
        content.style.display = 'block';
    }
}
