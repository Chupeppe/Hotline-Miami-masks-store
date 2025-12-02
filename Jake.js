const maskToModal = {
  Richard: 'modal1',
  Rasmus: 'modal2',
  Tony: 'modal3',
  Obry: 'modal4',
  DonJuan: 'modal5',
  Graham: 'modal6',
  Dennis: 'modal7',
  George: 'modal8',
  Ted: 'modal9',
  Rufus: 'modal10',
  Rami: 'modal11',
  William: 'modal12',
  Peter: 'modal13',
  Zack: 'modal14',
  Oscar: 'modal15',
  Rick: 'modal16',
  Brandon: 'modal17',
  Charlie: 'modal18',
  Louis: 'modal19',
  Phil: 'modal20',
  Neigel: 'modal21',
  Erl: 'modal22',
  Jones: 'modal23',
  Karl: 'modal24',
  Jake: 'modal25',
  Richter: 'modal26',
  Rassel: 'modal27',
  Kory: 'modal28',
  Tony2: 'modal29',
  AlexAsh: 'modal30',
  Mark: 'modal31',
  Irvin: 'modal32',
  Dallas: 'modal33'
};

Object.keys(maskToModal).forEach(maskId => {
  const mask = document.getElementById(maskId);
  mask.addEventListener('click', () => {
    const modal = document.getElementById(maskToModal[maskId]);
    modal.style.display = 'flex';
  });
  const containers = document.querySelectorAll('.container');
  const modals = document.querySelectorAll('.modal');

  containers.forEach(container => {
    container.addEventListener('click', () => {
      const modalId = container.dataset.modal;
      const modal = document.getElementById(modalId);
      modal.style.display = 'flex';
    });
  });

  modals.forEach(modal => {
    const closeBtn = modal.querySelector('.close');
    closeBtn.addEventListener('click', () => {
      modal.style.display = 'none';
    });

    modal.addEventListener('click', e => {
      if (e.target === modal) {
        modal.style.display = 'none';
      }
    });
  });
});