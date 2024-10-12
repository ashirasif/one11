const carsArray = [
  // Performance SUVs
  {
    brand: 'Mercedes Benz',
    name: 'Mercedes Benz G63',
    'Engine Type': 'Gas',
    Transmission: '9-speed shiftable automatic',
    'Drive Type': 'Four-wheel drive',
    'Total Seating': '5',
    'Base Engine Size': '4.0 L V8',
    Horsepower: '585 hp @ 6,000 rpm',
    Torque: '627 lb-ft @ 2,500 rpm',
    'Fuel Type': 'Premium unleaded',
    'Fuel Tank Capacity': '26.4 gallons',
    category: 'Performance SUVs',
    images: 3
  },
  {
    brand: 'Porsche',
    name: 'Porsche Cayenne',
    'Base Engine': 'Turbocharged 4.0-liter V8',
    Horsepower: '348 hp',
    'E-Hybrid': 'Turbocharged V6 + Electric Motor',
    'Combined Power': '463 hp',
    Torque: '553 lb-ft',
    Transmission: 'Eight-speed automatic',
    category: 'Performance SUVs',
    images: 4
  },
  {
    brand: 'Land Rover',
    name: 'Range Rover Sport',
    'Engine Options': 'Turbocharged 3.0-liter inline-six',
    Horsepower: '355 hp',
    Transmission: 'Eight-speed automatic',
    'Drive Type': 'Standard all-wheel drive with adjustable air suspension',
    'Fuel Economy': '20 mpg city / 25 mpg highway',
    category: 'Performance SUVs',
    images: 3
  },
  // {
  //   brand: 'Lamborghini',
  //   name: 'Lamborghini Urus',
  //   Engine: '4.0-liter twin-turbo V8',
  //   Horsepower: '657 hp',
  //   Acceleration: '0-60 mph in 3.1 seconds; quarter-mile in 11.3 seconds',
  //   'Top Speed': 'Estimated at 190 mph',
  //   Transmission: 'Eight-speed automatic',
  //   'Drive Type': 'Permanent all-wheel drive',
  //   Braking: '70-0 mph in 149 feet with standard carbon-ceramic brakes',
  //   'Fuel Economy': '14 mpg city / 19 mpg highway',
  //   Interior: 'Jet-fighter design, customizable performance settings, faux-suede and carbon-fibre accents',
  //   category: 'Performance SUVs'
  // },
  {
    brand: 'Audi',
    name: 'Audi RSQ8',
    Engine: '4.0L Twin-Turbo V8',
    Horsepower: '590 hp',
    Torque: '590 lb-ft',
    Transmission: '8-Speed Automatic',
    Drivetrain: 'All-Wheel Drive',
    'Fuel Tank Capacity': '22.5 gallons',
    'Seating Capacity': '5 seater',
    category: 'Performance SUVs',
    images: 3
  },
  {
    brand: 'Audi',
    name: 'Audi RS6',
    Engine: 'Twin-turbocharged 4.0-liter V-8',
    Horsepower: '621 hp',
    Torque: '627 lb-ft',
    'Hybrid System': '48-volt',
    Drivetrain: 'Quattro all-wheel drive',
    Transmission: 'Eight-speed automatic',
    Wheels: '22-inch lightweight wheels',
    category: 'Performance SUVs',
    images: 2
  },
  {
    brand: 'Mercedes Benz',
    name: 'Mercedes Benz G800 Brabus',
    Engine: 'Twin-turbo V-8',
    Horsepower: '800 hp',
    Torque: '450 lb-ft',
    Transmission: 'Nine-speed automatic',
    Drivetrain: 'All-wheel drive',
    Differentials: 'Triple differential locks (front, centre, rear) with low-range',
    Suspension: 'Independent front suspension, lower centre of gravity',
    'Ride Quality': 'Improved road manners, composed ride on most surfaces',
    category: 'Performance SUVs',
    images: 4
  },

  // Muscle Cars
  {
    brand: 'Ford',
    name: 'Ford Mustang GT',
    Engine: '5.0L V8',
    Horsepower: '~450 hp',
    '0-60 mph': '4.3 seconds',
    Transmission: '10-speed automatic',
    category: 'Muscle Cars',
    images: 3
  },
  {
    brand: 'Chevrolet',
    name: 'Chevrolet Camaro',
    'Engine Options': '6.2L V8',
    Horsepower: '455 hp',
    '0-60 mph': '4.4 seconds',
    Transmission: '10-speed automatic',
    category: 'Muscle Cars',
    images: 4
  },
  {
    brand: 'Dodge',
    name: 'Dodge Challenger',
    'Engine Options': '6.4L V8',
    Horsepower: '485 hp',
    '0-60 mph': '4.2 seconds',
    Transmission: '8-speed automatic',
    category: 'Muscle Cars',
    images: 4
  },
  // {
  //   brand: 'Dodge',
  //   name: 'Dodge Charger',
  //   'Engine Options': '5.7 HEMI V8',
  //   Horsepower: '390 hp',
  //   Transmission: '8-speed automatic',
  //   category: 'Muscle Cars'
  // },

  // Performance Cars
  {
    brand: 'BMW',
    name: 'BMW M550',
    Engine: '4.4L V8 twin-turbo, 523 hp',
    Transmission: '8-speed automatic',
    Drivetrain: 'AWD',
    '0-60 mph': '~3.6 seconds',
    'Top Speed': '~155 mph',
    Seating: '5 passengers',
    Features: 'iDrive system, Apple CarPlay, Android Auto, advanced safety systems',
    category: 'Performance Cars',
    images: 4
  },

  // Convertibles
  {
    brand: 'BMW',
    name: 'BMW 430i',
    Engine: '2.0L turbocharged inline-4',
    Horsepower: '255 hp',
    '0-60 mph': '~5.5 seconds',
    Transmission: '8-speed automatic',
    category: 'Convertibles',
    images: 4
  },
  // {
  //   brand: 'Chevrolet',
  //   name: 'Chevrolet Corvette C8 Stingray',
  //   Engine: '6.2L V8',
  //   Horsepower: '490-495 hp',
  //   '0-60 mph': '2.9 seconds',
  //   Transmission: '8-speed automatic',
  //   category: 'Convertibles'
  // },
  {
    brand: 'Porsche',
    name: 'Porsche 718 Boxster',
    'Engine Options': '2.0L turbocharged flat-4',
    Horsepower: '300 hp',
    '0-60 mph': '3.7 seconds',
    Transmission: '6-speed Automatic',
    category: 'Convertibles',
    images: 4
  },
  {
    brand: 'Mercedes Benz',
    name: 'Mercedes Benz C200',
    Engine: '2.0L with mild-hybrid system',
    Horsepower: '201 hp',
    '0-60 mph': '~7.3 seconds',
    Transmission: '9-speed automatic',
    category: 'Convertibles',
    images: 4
  },

  // Electric Cars
  {
    brand: 'Tesla',
    name: 'Tesla Model 3',
    Battery: 'Long Range, Performance models',
    Range: '272-358 miles (EPA estimated)',
    '0-60 mph': '3.1-5.8 seconds depending on the model',
    Horsepower: 'Up to 450 hp (Performance)',
    category: 'Electric Cars',
    images: 3
  },
  {
    brand: 'Tesla',
    name: 'Tesla Model Y',
    Battery: 'Long Range, Performance models',
    Range: '303-330 miles (EPA estimated)',
    '0-60 mph': '3.5-4.8 seconds depending on the model',
    Horsepower: 'Up to 456 hp (Performance)',
    category: 'Electric Cars',
    images: 4
  },
  {
    brand: 'Tesla',
    name: 'Tesla Model X',
    Battery: 'Long Range, Plaid models',
    Range: '333-348 miles (EPA estimated)',
    '0-60 mph': '2.5-3.8 seconds depending on the model',
    Horsepower: 'Up to 1,020 hp (Plaid)',
    category: 'Electric Cars',
    images: 4
  },

  // SUVs
  {
    brand: 'Audi',
    name: 'Audi Q8',
    Engine: '3.0L V6 Turbo',
    Horsepower: '335 hp',
    Torque: '369 lb-ft',
    Transmission: '8-speed automatic',
    '0 to 100 km/h': '5.6s',
    'Top Speed': '250 km/h',
    Drive: 'Quattro AWD with 48-volt hybrid assist',
    category: 'SUVs',
    images: 3
  },
  {
    brand: 'Mercedes Benz',
    name: 'Mercedes Benz GLS450 Maybach',
    Engine: '3.0-liter inline-six with 48-volt hybrid assist',
    Horsepower: '362 hp',
    Transmission: '9-speed automatic',
    '0 to 60 mph': '4.7 seconds',
    'Fuel Economy (City/Highway)': '15/19 mpg',
    Performance: 'Smooth air suspension with Maybach mode for ultimate comfort',
    Seating: '4 seats with power-adjustable, heated, and massaging rear recliner seats',
    category: 'SUVs',
    images: 4
  },
  {
    brand: 'Chevrolet',
    name: 'Chevrolet Captiva',
    'Engine Options': ' 2.4L or 2.0L turbo, ~145-250 hp',
    Horsepower: '181 hp',
    '0-60 mph': '11.30 seconds',
    Transmission: '6-speed automatic or CVT',
    Drivetrain: 'FWD or AWD',
    Seating: '5 to 7 passengers',
    category: 'SUVs',
    images: 4
  },
  {
    brand: 'Cadillac',
    name: 'Cadillac Escalade Sport Platinum',
    Engine: '6.2L V8 Gas',
    Horsepower: '420 hp @ 5,600 rpm',
    Torque: '460 lb-ft @ 4,100 rpm',
    Transmission: '10-speed shiftable automatic',
    'Drive Type': 'Rear-wheel drive with rear limited slip differential',
    'Seating Capacity': '7 seats',
    'Fuel Economy (City/Highway)': '14/19 MPG',
    'Fuel Type': 'Premium unleaded',
    category: 'SUVs',
    images: 4
  },
  {
    brand: 'Infiniti',
    name: 'Infiniti QX80',
    'Base Engine Size': '5.6 L',
    Cylinders: 'V8',
    'Base Engine Type': 'Gas',
    Horsepower: '400 hp @ 5,800 rpm',
    Torque: '413 lb-ft @ 4,000 rpm',
    category: 'SUVs',
    images: 4
  },
  {
    brand: 'Nissan',
    name: 'Nissan Patrol',
    'Base Engine Size': '5.6L V8',
    Horsepower: '400 hp @ 5,800 rpm',
    Torque: '413 lb-ft @ 4,000 rpm',
    Transmission: '7-speed shiftable automatic',
    'Drive Type': 'Four-wheel drive (4WD) with selectable low-range gearing',
    'Towing Capacity': '3,500 kg (braked)',
    category: 'SUVs',
    images: 3
  },
  {
    brand: 'Land Rover',
    name: 'Range Rover Evoque',
    'Engine Type': 'Gas',
    Transmission: '9-speed shiftable automatic',
    'Drive Type': 'All-wheel drive',
    Cylinders: 'Inline 4',
    'Total Seating': '5',
    category: 'SUVs',
    images: 3
  },
  {
    brand: 'Land Rover',
    name: 'Land Rover Defender',
    'Engine Type': '5.0L Supercharged V8',
    'Fuel Type': 'Premium unleaded (recommended)',
    'Fuel Tank Capacity': '23.8 gal',
    'Base Engine Size': '5.0 L',
    Horsepower: '518 hp @ 5,500 rpm',
    Torque: '406 lb-ft @ 2,000 rpm',
    Transmission: '8-speed shiftable automatic',
    'Drive Type': 'All-wheel drive',
    'Total Seating': '5',
    category: 'SUVs',
    images: 3
  },
  {
    brand: 'Land Rover',
    name: 'Range Rover Velar',
    'Engine Type': 'Turbocharged 2.0-liter inline-4',
    Transmission: '8-speed automatic',
    'Drive Type': 'All-wheel drive',
    Cylinders: 'Inline 4 / Inline 6',
    'Total Seating': '5',
    'Base Engine (P250)': 'Horsepower: 247 hp',
    'Acceleration (0-60 mph)': '7.4 seconds',
    category: 'SUVs',
    images: 2
  },
  {
    brand: 'Rolls Royce',
    name: 'Rolls Royce Cullinan',
    'Engine Type': 'Twin Turbo Premium Unleaded V-12',
    Transmission: '8-speed automatic',
    Horsepower: '591 hp',
    'Drive Type': 'All-wheel drive',
    'Total Seating': '5',
    'Acceleration (0-60 mph)': '4.5 seconds',
    category: 'SUVs',
    images: 4 
  },
  {
    brand: 'BMW',
    name: 'BMW X5',
    'Engine Type': '3.0 TwinTurbo V6',
    'Acceleration (0 - 100 km/h)': '4.3 sec',
    Performance: '0-60 mph in 3.9 sec',
    Features: 'Panoramic sunroof, dual-zone climate, optional massaging seats, remote start',
    category: 'SUVs',
    images: 3
  },
  // {
  //   brand: 'Chevrolet',
  //   name: 'Chevrolet Tahoe Z71',
  //   Engine: '5.3L V8',
  //   Horsepower: '355 hp @ 5,600 rpm',
  //   Torque: '383 lb-ft @ 4,100 rpm',
  //   Transmission: '10-speed automatic',
  //   'Drive Type': '4WD',
  //   '0-60 mph': '7.1 seconds',
  //   'Fuel Economy (City/Highway)': '15/20 MPG',
  //   'Towing Capacity': '8,200 lbs',
  //   'Seating Capacity': '7-8 seats',
  //   category: 'SUVs'
  // },

  // Sedans
  {
    brand: 'Mercedes Benz',
    name: 'Mercedes Benz S500',
    Engine: 'Turbocharged and intercooled DOHC 24-valve 3.0L inline-6',
    Power: '362 hp, 369 lb-ft',
    'Electric Motor': 'AC motor, 148 hp, 354 lb-ft',
    'Combined Output': '510 hp, 553 lb-ft',
    Battery: '22.7 kWh lithium-ion',
    Transmission: '9-speed automatic',
    category: 'Sedans',
    images: 3
  },
  {
    brand: 'Mercedes Benz',
    name: 'Mercedes S580',
    Engine:' 4.0 L Twin Turbo Gas/Electric V-8',
    'Horse Power': '496 hp',
    Torque:' 516 lb-ft',
    Transmission: '9-speed shiftable automatic',
    '0 to 100 km/h': '4.4 s',
    'Top speed': '260 km/h',
    category: 'Performance Cars',
    images: 3
  },
  {
    brand: 'Mercedes Benz',
    name: 'Mercedes Benz C200',
    'Top Speed': '246 km/h',
    'Acceleration (0-100 km/h)': '7.78 seconds',
    Engine: '2.0L, 4-cylinder inline, DOHC',
    'Engine Type': 'M264+EQ Boost',
    'Max Power': '201 bhp @ 5800-6100 rpm',
    'Max Torque': '300 Nm @ 1800-4000 rpm',
    'Fuel Type': 'Petrol',
    Drivetrain: 'RWD',
    Transmission: '9-speed automatic (paddle shift, sport mode)',
    category: 'Sedans',
    images: 4
  },
  {
    brand: 'Mercedes Benz',
    name: 'Mercedes Benz GLA250',
    Engine: '2.0L Inline-4 turbo with mild hybrid drive',
    'Horse Power': '221 hp',
    Torque: '258 lb-ft',
    Transmission: '8-speed dual-clutch automatic',
    '0 to 100 km/h': '6.8s',
    'Top speed': '209 km/h',
    category: 'Sedans',
    images: 3
  },
  {
    brand: 'Mercedes Benz',
    name: 'Mercedes Benz CLA 250',
    Engine: '2.0L Inline-4 turbo with mild hybrid drive',
    'Horse Power': '221 hp',
    Torque: '258 lb-ft',
    Transmission: '7-speed dual-clutch automatic',
    '0 to 100 km/h': '6.3s',
    'Top speed': '210 km/h',
    category: 'Sedans',
    images: 3
  },
  {
    brand: 'BMW',
    name: 'BMW 840i',
    Engine: 'B58 Turbocharged I6',
    'Horse Power': '335-hp',
    Torque: '369 lb-ft',
    Transmission: '8-speed Sport Automatic',
    '0 to 100 km/h': '5.2s',
    'Top speed': '250 km/h',
    category: 'Sedans',
    images: 3
  },
  {
    brand: 'BMW',
    name: 'BMW M850i',
    Engine: '5.0 L M70 V12 engine',
    'Horse Power': '523-hp',
    Torque: '332 lb-ft',
    Transmission: '4-speed automatic',
    '0 to 100 km/h': '3.9s',
    'Top speed': '256 km/h',
    category: 'Sedans',
    images: 4
  },
  {
    brand: 'BMW',
    name: 'BMW M5',
    Engine: 'twin-turbo 4.4-liter V-8',
    'Horse Power': '600-hp',
    Torque: '553 lb-ft',
    Transmission: '8-speed ZF GA8HP75Z automatic',
    '0 to 100 km/h': '3.5s',
    'Top speed': '250 km/h',
    category: 'Sedans',
    images: 4
  },
  {
    brand: 'BMW',
    name: 'BMW 740i',
    Engine: '3.0 V6 twin turbo',
    'Horse Power': '320 hp',
    Torque: '330 lb-ft',
    Transmission: '8-speed automatic',
    '0 to 100 km/h': '5.4s',
    'Top speed': '260 km/h',
    category: 'Sedans',
    images: 4
  },
  {
    brand: 'BMW',
    name: 'BMW 230i',
    Engine: '2.0 inline-4',
    'Horse Power': '255 hp',
    Torque: '295 lb-ft',
    Transmission: '8-speed automatic',
    '0 to 100 km/h': '5.8s',
    'Top speed': '260 km/h',
    category: 'Sedans',
    images: 4
  },
  {
    brand: 'BMW',
    name: 'BMW 330i',
    Engine: '2.0 V6 twin turbo',
    'Horse Power': '255 hp',
    Torque: '400 lb-ft',
    Transmission: '8-speed automatic',
    '0 to 100 km/h': '5.8s',
    'Top speed': '260 km/h',
    category: 'Sedans',
    images: 4
  },
  {
    brand: 'BMW',
    name: 'BMW 530i',
    Engine: '2.0 inline-4 twin turbo',
    'Horse Power': '255 hp',
    Torque: '295 lb-ft',
    Transmission: '8-speed automatic',
    '0 to 100 km/h': '5.9s',
    'Top speed': '260 km/h',
    category: 'Sedans',
    images: 4
  },
  {
    brand: 'Audi',
    name: 'Audi A3',
    Engine: 'Turbocharged DOHC 16-valve inline-4',
    Displacement: '121 in³ (1984 cm³)',
    Power: '201 hp @ 6200 rpm',
    Torque: '221 lb-ft @ 1600 rpm',
    Transmission: '7-speed dual-clutch automatic',
    category: 'Sedans',
    images: 4
  },
  {
    brand: 'Audi',
    name: 'Audi A4',
    Engine: 'Turbocharged and intercooled DOHC 16-valve inline-4',
    Displacement: '121 in³ (1984 cm³)',
    Power: '261 hp @ 6500 rpm',
    Torque: '273 lb-ft @ 1600 rpm',
    Transmission: '7-speed dual-clutch automatic',
    Suspension: 'Multilink (Front/Rear)',
    category: 'Sedans',
    images: 4
  },
  {
    brand: 'Audi',
    name: 'Audi A8',
    Engine: 'Turbocharged and intercooled DOHC 24-valve 3.0L inline-6',
    Power: '362 hp, 369 lb-ft',
    'Electric Motor': 'AC motor, 148 hp, 354 lb-ft',
    'Combined Output': '510 hp, 553 lb-ft',
    Battery: '22.7 kWh lithium-ion',
    Transmission: '9-speed automatic',
    category: 'Sedans',
    images: 4
  },
  {
    brand: 'Mercedes Benz',
    name: 'Mercedes Benz A220',
    Engine: '2.0L inline-4 turbo',
    'Horse Power': '188 hp',
    Torque: '221 lb-ft',
    Transmission: '7-speed dual-clutch automatic',
    '0 to 100 km/h': '7.2 s',
    'Top speed': '210 km/h',
    category: 'Sedans',
    images: 4
  },
  {
    brand: 'Mercedes Benz',
    name: 'Mercedes Benz CLA250',
    Engine: '2.0L Inline-4 turbo with mild hybrid drive',
    'Horse Power': '221 hp',    
    Torque: '258 lb-ft',    
    Transmission: '7-speed dual-clutch automatic',    
    '0 to 100 km/h': '6.3s',    
    'Top speed': '210 km/h',
    category: 'Sedans',
    images: 3
  },

  // Sports Cars (from Brands section)
  // {
  //   brand: 'Chevrolet',
  //   name: 'Chevrolet Corvette Stingray',
  //   Engine: '6.2L V8',
  //   Horsepower: '495 hp @ 6,450 rpm',
  //   Torque: '470 lb-ft @ 5,150 rpm',
  //   Transmission: '8-speed dual-clutch automatic',
  //   '0-60 mph': '2.9 seconds (with Z51 Performance Package)',
  //   'Top Speed': '194 mph',
  //   'Fuel Economy (City/Highway)': '15/27 MPG',
  //   'Drive Type': 'Rear-wheel drive',
  //   category: 'Sports Cars'
  // },
  // {
  //   brand: 'Chevrolet',
  //   name: 'Chevrolet Tahoe Z71',
  //   Engine: '5.3L V8',
  //   Horsepower: '355 hp @ 5,600 rpm',
  //   Torque: '383 lb-ft @ 4,100 rpm',
  //   Transmission:'10-speed automatic',
  //   'Drive Type': '4WD',
  //   '0-60 mph': '7.1 seconds',
  //   'Fuel Economy (City/Highway)':' 15/20 MPG',
  //   'Towing Capacity': '8,200 lbs',
  //   'Seating Capacity': '7-8 seats',
  //   category: 'SUVs'
  // },
  // {
  //   brand: 'Ferrari',
  //   name: 'Ferrari 488 Pista',
  //   Engine: '3.9L Twin-Turbo V8',
  //   Horsepower: '710 hp @ 8,000 rpm',
  //   Torque: '568 lb-ft @ 3,000 rpm',
  //   Transmission: '7-speed dual-clutch automatic',
  //   '0-60 mph': '2.7 seconds',
  //   'Top Speed': '211 mph',
  //   'Fuel Economy (City/Highway)': '15/20 MPG',
  //   'Drive Type': 'Rear-wheel drive',
  //   category: 'Sports Cars'
  // },
  {
    brand: 'Ferrari',
    name: 'Ferrari 296 GTB',
    Engine: '3.0L V6 Twin-Turbo + electric motor',
    Horsepower: '~818 hp',
    Torque: '546 lb-ft',
    Transmission: '8-speed dual-clutch, RWD',
    '0-100 mph': '~2.9 seconds',
    'Top Speed': '330 km/h',
    category: 'Sports Cars',
    images: 3
  },
  {
    brand: 'Ferrari',
    name: 'Ferrari SF 90',
    Engine: '4.0L V8 Twin-Turbo + electric motors',
    Power: '~1,000 hp',
    '0-100 km/h':' ~2.5 seconds',
    'Top Speed': '~340 km/h',
    Transmission: '8-speed dual-clutch, AWD',
    category: 'Sports Cars',
    images: 3
  },
  {
    brand: 'Ferrari',
    name: 'Ferrari F8',
    Engine: '3.9L V8 Twin-Turbo',
    Power: '~710 hp',
    '0-100 km/h': '~2.9 seconds',
    'Top Speed': '~340 km/h',
    Transmission: '7-speed dual-clutch, RWD',
    category: 'Sports Cars',
    images: 3
  },
  {
    brand: 'Lamborghini',
    name: 'Lamborghini Hurracan',
    Engine: '5.2L V10',
    Power: '~610 hp (EVO) / ~631 hp (Performante)',
    '0-100 km/h': '~3.2 seconds (EVO)',
    'Top Speed': '~325 km/h',
    Transmission:' 7-speed dual-clutch, AW',
    category: 'Sports Cars',
    images: 3
  },
  {
    brand: 'Maserati',
    name: 'Maserati Levante',
    Engine: '3.8L Twin-Turbocharged V8',
    Horsepower: '580 hp @ 6,250 rpm',
    Torque: '538 lb-ft @ 2,500-5,000 rpm',
    Transmission: '8-speed automatic',
    '0-60 mph': '3.8 seconds',
    'Top Speed': '187 mph',
    'Fuel Economy (City/Highway)': '13/20 MPG',
    'Drive Type': 'All-wheel drive',
    category: 'SUVs',
    images: 4
  },
  {
    brand: 'Maserati',
    name: 'Maserati Grecale',
    Engines: '2.0L I4 (296 hp) | 3.0L V6 (523 hp)',
    '0-60 mph': '5.6s (I4) | 3.6s (V6)',
    'Top Speed': '149 mph (I4) | 177 mph (V6)',
    'Fuel Economy': '~24 mpg',
    Length: '~193 in',
    category: 'SUVs',
    images: 4

  },
  // {
  //   brand: 'Maserati',
  //   name: 'Maserati Quattroporte',
  //   Engine: '3.0L Twin-Turbocharged V6 / 3.8L V8 (GTS model)',
  //   Horsepower: '424 hp (V6) / 580 hp (V8)',
  //   Torque: '428 lb-ft (V6) / 524 lb-ft (V8)',
  //   Transmission: '8-speed automatic',
  //   '0-60 mph': '4.8 seconds (V6) / 4.2 seconds (V8)',
  //   'Top Speed': '179 mph (V6) / 190 mph (V8)',
  //   'Fuel Economy (City/Highway)': '16/23 MPG (V6) / 13/20 MPG (V8)',
  //   'Drive Type': 'Rear-wheel drive',
  //   category: 'Sedans'
  // },
  {
    brand: 'McLaren',
    name: 'McLaren 720S',
    Engine: '4.0L Twin-Turbocharged V8',
    Horsepower: '710 hp @ 7,500 rpm',
    Torque: '568 lb-ft @ 5,500 rpm',
    Transmission: '7-speed dual-clutch automatic',
    '0-60 mph': '2.8 seconds',
    'Top Speed': '212 mph',
    'Fuel Economy (City/Highway)': '15/22 MPG',
    'Drive Type': 'Rear-wheel drive',
    category: 'Supercars',
    images: 3
  },
  {
    brand: 'McLaren',
    name: 'Maserati GranTurismo',
    Engine: ' 3.0L V6, 490 hp, 0-100 km/h in 3.9s, top speed 302 km/h',
    Horsepower: '550 hp',
    'Key Features': 'Digital displays, adaptive suspension, and advanced driver assistance systems (ADAS)',
    Transmission: ' 8-speed automatic, rear-wheel drive (Modena, Trofeo), all-wheel drive (Folgore)',
    '0-100 mph': '3.5s',
    'Top Speed': '320 km/h',
    'Fuel Economy (City/Highway)': '760 hp, 0-100 km/h in 2.7s, range 450 km',
    'Drive Type': 'Rear-wheel drive',
    category: 'Grand Tourers',
    images: 3
  },
  // {
  //   brand: 'McLaren',
  //   name: 'McLaren GT',
  //   Engine: '4.0L Twin-Turbo V8',
  //   Horsepower: '612 hp @ 7,500 rpm',
  //   Torque: '465 lb-ft @ 5,500 rpm',
  //   Transmission: '7-speed dual-clutch automatic',
  //   '0-60 mph': '3.1 seconds',
  //   'Top Speed': '203 mph',
  //   'Fuel Economy (City/Highway)': '15/22 MPG',
  //   'Drive Type': 'Rear-wheel drive',
  //   category: 'Grand Tourers'
  // }
];


export function getAllCategories() {
  const arr = carsArray.map(car => car.category);
  // Remove duplicates with Set
  return [...new Set(arr)];
}

export function getAllCars() {
  // list all cars name that dont have images attribute
  const carsWithoutImages = carsArray.filter(car => !car.images).map(car => car.name);
  console.log(carsWithoutImages);
  return carsArray;
}

export function getCarsByCategory(category: string) {
  return carsArray.filter(car => car.category === category);
}

export function getCarByName(name: string) {

  return carsArray.find(car => car.name === name.split('-').join(' '));
}

export function getCarByBrand(brand: string) {
  return carsArray.filter(car => car.brand === brand);
}

export function getAllBrands() {
  const arr = carsArray.map(car => car.brand);
  // Remove duplicates
  return arr.filter((value, index) => arr.indexOf(value) === index);
}



