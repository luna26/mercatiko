const crData = {
    'San José': {
        'San José': [
            'Carmen',
            'Merced',
            'Hospital',
            'Catedral',
            'Zapote',
            'San Francisco',
            'Uruca',
            'Mata Redonda',
            'Pavas',
            'Hatillo',
            'San Sebastián',
        ],
        Escazú: ['Escazú Centro', 'San Rafael', 'San Antonio'],
        Desamparados: [
            'Desamparados',
            'San Miguel',
            'San Juan de Dios',
            'San Rafael Arriba',
            'San Antonio',
            'Frailes',
            'Patarrá',
            'San Cristóbal',
            'Rosario',
            'Damas',
            'San Rafael Abajo',
            'Gravilias',
            'Los Guido',
        ],
        Puriscal: [
            'Santiago',
            'Mercedes Sur',
            'Barbacoas',
            'Grifo Alto',
            'San Rafael',
            'Candelarita',
            'Desamparaditos',
            'San Antonio',
            'Chires',
        ],
        Tarrazú: ['San Marcos', 'San Lorenzo', 'San Carlos'],
        Aserrí: ['Aserrí', 'Tarbaca', 'Vuelta de Jorco', 'San Gabriel', 'Legua', 'Monterrey', 'Salitrillos'],
        Mora: ['Ciudad Colón', 'Guayabo', 'Tabarcia', 'Piedras Negras', 'Picagres', 'Jaris', 'Quitirrisí'],
        Goicoechea: [
            'Guadalupe',
            'San Francisco',
            'Calle Blancos',
            'Mata de Plátano',
            'Ipís',
            'Rancho Redondo',
            'Purral',
        ],
        'Santa Ana': ['Santa Ana', 'Salitral', 'Pozos', 'Uruca', 'Piedades', 'Brasil'],
        Alajuelita: ['Alajuelita', 'San Josecito', 'San Antonio', 'Concepción', 'San Felipe'],
        'Vázquez de Coronado': ['San Isidro', 'San Rafael', 'Dulce Nombre', 'Patalillo', 'Cascajal'],
        Acosta: ['San Ignacio', 'Guaitil', 'Palmichal', 'Cangrejal', 'Sabanillas'],
        Tibás: ['San Juan', 'Cinco Esquinas', 'Anselmo Llorente', 'León XIII', 'Colima'],
        Moravia: ['San Vicente', 'San Jerónimo', 'La Trinidad'],
        'Montes de Oca': ['San Pedro', 'Sabanilla', 'Mercedes', 'San Rafael'],
        Turrubares: ['San Pablo'],
        Dota: ['Santa María'],
        Curridabat: ['Curridabat', 'Granadilla', 'Sánchez', 'Tirrases'],
        'Pérez Zeledón': [
            'San Isidro de El General',
            'General',
            'Daniel Flores',
            'Rivas',
            'San Pedro',
            'Platanares',
            'Pejibaye',
            'Cajón',
            'Barú',
            'Río Nuevo',
            'Páramo',
            'La Amistad',
        ],
        'León Cortés': ['San Pablo', 'San Andrés', 'Llano Bonito', 'San Isidro', 'Santa Cruz', 'San Antonio'],
    },

    Alajuela: {
        Alajuela: [
            'Alajuela',
            'San José',
            'Carrizal',
            'San Antonio',
            'Guácima',
            'San Isidro',
            'Sabanilla',
            'San Rafael',
            'Río Segundo',
            'Desamparados',
            'Turrúcares',
            'Tambor',
            'Garita',
            'Sarapiquí',
        ],
        'San Ramón': [
            'San Ramón',
            'Santiago',
            'San Juan',
            'Piedades Norte',
            'Piedades Sur',
            'San Rafael',
            'San Isidro',
            'Angeles',
            'Alfaro',
            'Volio',
            'Concepción',
            'Zapotal',
            'Peñas Blancas',
        ],
        Grecia: ['Grecia', 'San Isidro', 'San José', 'San Roque', 'Tacares', 'Río Cuarto', 'Puente de Piedra', 'Bolívar'],
        'San Mateo': ['San Mateo', 'Desmonte', 'Jesús María', 'Labrador'],
        Atenas: ['Atenas', 'Jesús', 'Mercedes', 'San Isidro', 'Concepción', 'San José', 'Santa Eulalia', 'Escobal'],
        Naranjo: ['Naranjo', 'San Miguel', 'San José', 'Cirrí Sur', 'San Jerónimo', 'San Juan', 'Rosario', 'Palmitos'],
        Palmares: ['Palmares', 'Zaragoza', 'Buenos Aires', 'Santiago', 'Candelaria', 'Esquipulas', 'La Granja'],
        Poás: ['San Pedro', 'San Juan', 'San Rafael', 'Carrillos', 'Sabana Redonda'],
        Orotina: ['Orotina', 'El Mastate', 'Hacienda Vieja', 'Coyolar', 'La Ceiba'],
        'San Carlos': [
            'Quesada',
            'Florencia',
            'Buenavista',
            'Aguas Zarcas',
            'Venecia',
            'Pital',
            'Fortuna',
            'Tigra',
            'Palmera',
            'Venado',
            'Cutris',
            'Monterrey',
            'Pocosol',
        ],
        Zarcero: ['Zarcero', 'Laguna', 'Tapezco', 'Guadalupe', 'Palmira', 'Zapote', 'Brisas'],
        Sarchí: ['Sarchí Norte', 'Sarchí Sur', 'Toro Amarillo', 'San Pedro', 'Rodríguez'],
        Upala: ['Upala', 'Aguas Claras', 'San José', 'Bijagua', 'Delicias', 'Dos Ríos', 'Yolillal', 'Canalete'],
        'Los Chiles': ['Los Chiles', 'Caño Negro', 'Amparo', 'San Jorge'],
        Guatuso: ['San Rafael', 'Buenavista', 'Cote'],
    },

    Cartago: {
        Cartago: [
            'Oriental',
            'Occidental',
            'Carmen',
            'San Nicolás',
            'Agua Caliente',
            'Guadalupe',
            'Corralillo',
            'Tierra Blanca',
            'Dulce Nombre',
            'Llano Grande',
            'Quebradas',
        ],
        Paraíso: ['Paraíso', 'Santiago', 'Orosi', 'Cachí', 'Llanos de Santa Lucía'],
        'La Unión': [
            'Tres Ríos',
            'San Diego',
            'San Juan',
            'San Rafael',
            'Concepción',
            'Dulce Nombre',
            'San Ramón',
            'Río Azul',
        ],
        Jiménez: ['Juan Viñas', 'Tucurrique', 'Pejibaye'],
        Turrialba: [
            'Turrialba',
            'La Suiza',
            'Peralta',
            'Santa Cruz',
            'Santa Teresita',
            'Pavones',
            'Tuis',
            'Tayutic',
            'Santa Rosa',
            'Tres Equis',
            'La Isabel',
            'Chirripó',
        ],
        Alvarado: ['Pacayas', 'Cervantes', 'Capellades'],
        Oreamuno: ['San Rafael', 'Cot', 'Potrero Cerrado', 'Cipreses', 'Santa Rosa'],
        'El Guarco': ['El Tejar', 'San Isidro', 'Tobosi', 'Patio de Agua'],
    },

    Heredia: {
        Heredia: ['Heredia', 'Mercedes', 'San Francisco', 'Ulloa', 'Varablanca'],
        Barva: ['Barva', 'San Pedro', 'San Pablo', 'San Roque', 'Santa Lucía', 'San José de la Montaña'],
        'Santo Domingo': [
            'Santo Domingo',
            'San Vicente',
            'San Miguel',
            'Paracito',
            'Santo Tomás',
            'Santa Rosa',
            'Tures',
            'Pará',
        ],
        'Santa Bárbara': ['Santa Bárbara', 'San Pedro', 'San Juan', 'Jesús', 'Santo Domingo', 'Purabá'],
        'San Rafael': ['San Rafael', 'San Josecito', 'Santiago', 'Angeles', 'Concepción'],
        'San Isidro': ['San Isidro', 'San José', 'Concepción', 'San Francisco'],
        Belén: ['San Antonio', 'Ribera', 'Asunción'],
        Flores: ['San Joaquín', 'Barrantes', 'Llorente'],
        'San Pablo': ['San Pablo', 'Rincón de Sabanilla'],
        Sarapiquí: ['Puerto Viejo', 'La Virgen', 'Horquetas', 'Llanuras del Gaspar', 'Cureña'],
    },

    Guanacaste: {
        Liberia: ['Liberia', 'Cañas Dulces', 'Mayorga', 'Nacascolo', 'Curubandé'],
        Nicoya: ['Nicoya', 'Mansión', 'San Antonio', 'Quebrada Honda', 'Sámara', 'Nosara', 'Belén de Nosarita'],
        'Santa Cruz': [
            'Santa Cruz',
            'Bolsón',
            'Veintisiete de Abril',
            'Tempate',
            'Cartagena',
            'Cuajiniquil',
            'Diriá',
            'Cabo Velas',
            'Tamarindo',
        ],
        Bagaces: ['Bagaces', 'Fortuna', 'Mogote', 'Río Naranjo'],
        Carrillo: ['Filadelfia', 'Palmira', 'Sardinal', 'Belén'],
        Cañas: ['Cañas', 'Palmira', 'San Miguel', 'Bebedero', 'Porozal'],
        Abangares: ['Las Juntas', 'Sierra', 'San Juan', 'Colorado'],
        Tilarán: ['Tilarán', 'Quebrada Azul', 'Tronadora', 'Santa Rosa', 'Líbano', 'Tierras Morenas', 'Arenal'],
        Nandayure: ['Carmona', 'Santa Rita', 'Zapotal', 'San Pablo', 'Porvenir', 'Bejuco'],
        'La Cruz': ['La Cruz', 'Santa Cecilia', 'Garita', 'Santa Elena'],
        Hojancha: ['Hojancha', 'Monte Roma', 'Puerto Carrillo', 'Huacas'],
    },

    Puntarenas: {
        Puntarenas: [
            'Puntarenas',
            'Pitahaya',
            'Chomes',
            'Lepanto',
            'Paquera',
            'Manzanillo',
            'Guacimal',
            'Barranca',
            'Monte Verde',
            'Isla del Coco',
            'Cóbano',
            'Chacarita',
            'Chira',
            'Acapulco',
            'El Roble',
            'Arancibia',
        ],
        Esparza: ['Espíritu Santo', 'San Juan Grande', 'Macacona', 'San Rafael', 'Caldera'],
        'Buenos Aires': [
            'Buenos Aires',
            'Volcán',
            'Potrero Grande',
            'Boruca',
            'Pilas',
            'Colinas',
            'Chánguena',
            'Biolley',
            'Brunka',
        ],
        'Montes de Oro': ['Miramar', 'La Unión', 'San Isidro'],
        Osa: ['Puerto Cortés', 'Palmar', 'Sierpe', 'Bahía Ballena', 'Piedras Blancas'],
        Aguirre: ['Quepos', 'Savegre', 'Naranjito'],
        Golfito: ['Golfito', 'Puerto Jiménez', 'Guaycará', 'Pavón'],
        'Coto Brus': ['San Vito', 'Sabalito', 'Agua Buena', 'Limoncito', 'Pittier', 'Gutiérrez Braun'],
        Parrita: ['Parrita'],
        Corredores: ['Ciudad Neily', 'La Cuesta', 'Canoas', 'Laurel'],
        Garabito: ['Jacó', 'Tárcoles'],
    },

    Limón: {
        Limón: ['Limón', 'Valle La Estrella', 'Río Blanco', 'Matama'],
        Pococí: ['Guápiles', 'Jiménez', 'Rita', 'Roxana', 'Cariari', 'Colorado'],
        Siquirres: ['Siquirres', 'Pacuarito', 'Florida', 'Germania', 'Cairo', 'Alegría'],
        Talamanca: ['Bratsi', 'Sixaola', 'Cahuita', 'Telire'],
        Matina: ['Matina', 'Batán', 'Carrandí'],
        Guácimo: ['Guácimo', 'Mercedes', 'Pocora', 'Río Jiménez', 'Duacarí'],
    },
};


const observer = new MutationObserver(function (mutations) {
    mutations.forEach(function (mutation) {

        if (mutation.target.matches('select#distrito') || mutation.target.matches('select#canton') || mutation.target.matches('select#provincia')) fillInfo()

        if (mutation.target.matches('div.shipping-address-header-info') ||
            mutation.target.matches('#shipping-address-container') ||
            mutation.target.matches('#shipping-address-container *') ||
            mutation.target.matches('header-actions')) return;

        if (
            (mutation.target.matches('#cart *') ||
                mutation.target.matches('cart-drawer-component.cart-drawer'))) {
            init();
            setValues()
            // window.visually.rerender()
        }
    });
});

observer.observe(document.body, { childList: true, subtree: true });

document.addEventListener('change', function (e) {
    e.stopPropagation()
    e.stopImmediatePropagation()

    const $province = document.querySelector('#provincia');
    const $county = document.querySelector('#canton');
    const $district = document.querySelector('#distrito');

    setValues()

    //remove the error when all the options are filled
    if ($province && $county && $district && $province.value !== '' && $county.value !== '' && $district.value !== '')
        document.querySelectorAll('.shipping-error').forEach((error) => error.remove());
});

document.addEventListener('click', function (e) {
    const target = e.target
    const button = target.closest('button')
    const select = target.closest('select')

    if (select) {
        e.stopPropagation()
        return
    }

    if (button) {
        if (button.matches('.shipping-address-header-btn')) {
            const container = document.querySelector('#shipping-address-container')

            if (container.classList.contains('show-shipping')) {
                container.classList.remove('show-shipping')
            }
            else if (!container.classList.contains('show-shipping')) {
                container.classList.add('show-shipping')
            }
        }
    }
});

//events
document.addEventListener('click', function (e) {
    const target = e.target;
    const $button = target.closest('button');

    if ($button) {
        if ($button.matches('button[name="checkout"]')) {
            const $province = document.querySelector('#provincia');
            const $county = document.querySelector('#canton');
            const $district = document.querySelector('#distrito');
            const error = 'Esta información es necesaria.';
            const $shippingContainer = document.querySelector('#shipping-address-container');
            let showError = false;

            if ($province) {
                if ($province.value === '') {
                    e.preventDefault()
                    e.stopPropagation()
                    showError = true;
                }
            }

            if ($county) {
                if ($county.value === '') {
                    e.preventDefault()
                    e.stopPropagation()
                    showError = true;
                }
            }

            if ($district) {
                if ($district.value === '') {
                    e.preventDefault()
                    e.stopPropagation()
                    showError = true;
                }
            }

            if (showError) {
                document.querySelectorAll('.shipping-error').forEach((error) => error.remove());
                // $button.insertAdjacentHTML('beforebegin', `<p class="shipping-error">${error}</p>`);
                $shippingContainer
                    .querySelector('.shipping-address')
                    .insertAdjacentHTML('afterbegin', `<p class="shipping-error">${error}</p>`);

                //scroll to section to be filled
                const yOffset = -100;
                const y = $shippingContainer.getBoundingClientRect().top + window.pageYOffset + yOffset;

                document.querySelector("#cart").scrollTo({
                    top: 0,
                    behavior: 'smooth',
                });

                //unhide shipping info section
                document.querySelector('.shipping-address-container').classList.add('show-shipping')
            }
        }
    }
});

function setValues() {
    const $province = document.querySelector('#provincia');
    const $county = document.querySelector('#canton');
    const $district = document.querySelector('#distrito');

    const $provinceHidden = document.querySelector('#province');
    const $countyHidden = document.querySelector('#district');
    const $districtHidden = document.querySelector('#county');

    if ($province) $provinceHidden.value = $province.value
    if ($county) $countyHidden.value = $county.value
    if ($district) $districtHidden.value = $district.value
}

function fillInfo(hide = false) {
    const provinciaSelect = window.sessionStorage.getItem('elemar-provincia');
    const cantonSelect = window.sessionStorage.getItem('elemar-canton');
    const distritoSelect = window.sessionStorage.getItem('elemar-distrito');
    const $container = document.querySelector('.shipping-address-header-info')

    document.querySelectorAll('.shipping-address-header-info p').forEach((shipping) => shipping.remove())

    if (provinciaSelect || cantonSelect || distritoSelect)
        $container.insertAdjacentHTML('beforeend', `<p>
      ${provinciaSelect ? `${provinciaSelect}` : ''}${cantonSelect ? `, ${cantonSelect}` : ''}${distritoSelect ? `, ${distritoSelect}` : ''}
      </p>`)

    if (provinciaSelect && cantonSelect && distritoSelect)
        $container.insertAdjacentHTML('beforeend', `<p class="shipping-address-header-info-disc" >Detalles de entrega, como ubicación y notas adicionales, serán solicitados en la página de pago.</p>`)


    if (hide && provinciaSelect && cantonSelect && distritoSelect)
        //hide options again since all fields were updated
        document.querySelector('.shipping-address-container').classList.remove('show-shipping')
}

function init() {
    /* ============================
            FORM FIELDS HIDDEN
            ============================ */
    const provinciaSelect = document.getElementById('provincia');
    const cantonSelect = document.getElementById('canton');
    const distritoSelect = document.getElementById('distrito');

    if (!provinciaSelect || !cantonSelect || !distritoSelect) return

    /* ============================
            LOAD SAVED VALUES (cart.attributes)
            ============================ */
    const savedProvincia = window.sessionStorage.getItem('elemar-provincia');
    const savedCanton = window.sessionStorage.getItem('elemar-canton');
    const savedDistrito = window.sessionStorage.getItem('elemar-distrito');


    /* ============================
            LOAD PROVINCES
            ============================ */
    if (provinciaSelect && provinciaSelect.querySelectorAll('option').length === 1)
        for (let provincia in crData) {
            const opt = document.createElement('option');
            opt.value = provincia;
            opt.textContent = provincia;
            provinciaSelect.appendChild(opt);
        }

    /* ============================
            PRESELECT PROVINCIA
            ============================ */
    if (savedProvincia && provinciaSelect) {
        provinciaSelect.value = savedProvincia;
    }

    /* ============================
            INIT: LOAD CANTONES + DISTRITOS IF RETURNED
            ============================ */
    if (savedProvincia) {
        loadCantones(savedProvincia);

        if (savedCanton) {
            loadDistritos(savedProvincia, savedCanton);
        }
    }

    /* ============================
            EVENTS
            ============================ */
    if (provinciaSelect)
        provinciaSelect.addEventListener('change', function () {
            if (!this.value) return
            const provincia = this.value;
            loadCantones(provincia);

            window.sessionStorage.setItem('elemar-provincia', provincia);
            window.sessionStorage.removeItem('elemar-canton', canton);
            window.sessionStorage.removeItem('elemar-distrito', distrito);

            fillInfo(true)
        });

    if (cantonSelect)
        cantonSelect.addEventListener('change', function () {
            if (!provinciaSelect.value) return
            const provincia = provinciaSelect.value;
            const canton = this.value;
            loadDistritos(provincia, canton);

            window.sessionStorage.setItem('elemar-canton', canton);
            window.sessionStorage.removeItem('elemar-distrito', distrito);

            fillInfo(true)
        });

    if (distritoSelect)
        distritoSelect.addEventListener('change', function () {
            if (!distritoSelect.value) return
            const distrito = distritoSelect.value;
            window.sessionStorage.setItem('elemar-distrito', distrito);

            fillInfo(true)
        });

    /* ============================
            LOAD CANTONES WHEN PROVINCIA LOADED
            ============================ */
    function loadCantones(provincia) {
        cantonSelect.innerHTML = '<option value="">Cantón</option>';
        distritoSelect.innerHTML = '<option value="">Distrito</option>';

        if (!provincia) return;

        const cantones = crData[provincia];
        for (let canton in cantones) {
            const opt = document.createElement('option');
            opt.value = canton;
            opt.textContent = canton;
            cantonSelect.appendChild(opt);
        }

        if (savedCanton && cantonSelect) {
            cantonSelect.value = savedCanton;
        }
    }

    /* ============================
            LOAD DISTRITOS WHEN CANTON LOADED
            ============================ */
    function loadDistritos(provincia, canton) {
        distritoSelect.innerHTML = '<option value="">Distrito</option>';

        if (!provincia || !canton) return;

        const distritos = crData[provincia] && crData[provincia][canton] ? crData[provincia][canton] : [];

        distritos.forEach((d) => {
            const opt = document.createElement('option');
            opt.value = d;
            opt.textContent = d;
            distritoSelect.appendChild(opt);
        });

        if (savedDistrito && distritoSelect) {
            distritoSelect.value = savedDistrito;
        }
    }
}

/* ============================
          final direccion de entrega
          ============================ */