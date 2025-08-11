// src/data/projects.js

export const PROJECTS = [
  {
  id: 'elorus-csv-invoicer',
  title: 'Elorus CSV Invoicer',
  desc: 'Utility to batch-create invoices in Elorus from CSV files via the Elorus API (mapping, validation, and dry-run support).',
  image: '/images/projects/csv_elorus_mydata.png', // add an icon/screenshot here
  demo: null,
  github: 'https://github.com/dimfot3/elorus-csv-invoicer',
  // Optional:
  // startDate: '2024-01-01',
  // endDate: null,
  tags: ['Automation', 'Invoices', 'CSV']
},
  {
    id: 'thesis-detection',
    title: 'LiDAR Human & Plane Detection',
    desc: 'Human/pose and plane detectors on LiDAR point clouds (PointNet/PointNet++), with ROS2 apps and training utilities.',
    image: '/images/projects/detection_thesis.png', // put an image in /public/images/projects/
    demo: null,
    github: 'https://github.com/dimfot3/thesis_detection',
    tags: ['LiDAR', 'Detection', 'ROS2'],
    tech: ['Python', 'PointNet', 'HDBSCAN', 'JRDB']
  },
  {
    id: 'thesis-simulation',
    title: 'LiDAR Indoor Simulation (Gazebo)',
    desc: 'Bedroom/workspace indoor scenes, animated humans (Mixamo), ROS2 integration, and Docker support for reproducible runs.',
    image: '/images/projects/simulation_thesis.png',
    demo: null,
    github: 'https://github.com/dimfot3/thesis_simulation',
    tags: ['Simulation', 'Robotics'],
    tech: ['C++', 'ROS2', 'Gazebo', 'Docker']
  },
  {
    id: 'cuda-ising',
    title: 'CUDA Ising Model',
    desc: 'GPU-accelerated Ising model with multiple kernels, benchmarking scripts, and optional Google Tests.',
    image: '/images/projects/ising.png',
    demo: null,
    github: 'https://github.com/dimfot3/CUDA_proj',
    tags: ['HPC', 'GPU'],
    tech: ['CUDA', 'C/C++', 'CMake']
  },
  {
    id: 'vp-tree-knn',
    title: 'K-NN with Vantage-Point Tree',
    desc: 'Sequential, OpenMP, and MPI+OpenMP implementations of VP-tree construction and KNN search with tests.',
    image: '/images/projects/knn_vnt.png',
    demo: null,
    github: 'https://github.com/dimfot3/K-NN-with-vantage-point-tree',
    tags: ['Algorithms', 'Parallel'],
    tech: ['C', 'OpenMP', 'MPI', 'Python']
  },
  {
    id: 'triangle-counting',
    title: 'Triangle Counting (Graphs)',
    desc: 'A·(A²) masked approach for triangle counting in sparse graphs; C (pthreads/OpenMP/OpenCilk) + Julia version.',
    image: '/images/projects/triangle_counting.png',
    demo: null,
    github: 'https://github.com/dimfot3/Triangle_Counting',
    tags: ['Graphs', 'Parallel'],
    tech: ['C', 'OpenMP', 'OpenCilk', 'Julia']
  },
  {
    id: 'mpi-median',
    title: 'MPI: Distribute by Median',
    desc: 'Message Passing Interface project implementing distribution by median with buildable C/C++ code and tests.',
    image: '/images/projects/parallel_quickselect.jpg',
    demo: null,
    github: 'https://github.com/dimfot3/MPI_Proj',
    tags: ['Distributed'],
    tech: ['MPI', 'C/C++', 'CMake']
  }
];
