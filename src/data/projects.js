// src/data/projects.js

export const PROJECTS = [
  {
    id: 'thesis-detection',
    title: 'LiDAR-Based 3D Indoor Reconstruction & Human Segmentation',
    desc: 'Human/pose and plane degmentors on LiDAR point clouds (PointNet/PointNet++), with ROS2 apps and training utilities.',
    image: `${import.meta.env.BASE_URL}images/projects/detection_thesis.png`,
    demo: null,
    github: 'https://github.com/dimfot3/LiDAR-Based-Indoor-Reconstruction-Human-Detection',
    tags: ['LiDAR', '3D Segmentation', 'DNN'],
    tech: ['Python', 'Pointet++' ,'HDBSCAN']
  },
  
  {
    id: 'thesis-simulation',
    title: 'Realistic LiDAR Simulation for Indoor Reconstruction Human Perception',
    desc: 'Bedroom/workspace indoor scenes, animated humans (Mixamo), ROS2 integration, and Docker support for reproducible runs.',
    image: `${import.meta.env.BASE_URL}images/projects/simulation_thesis.png`,
    demo: null,
    github: 'https://github.com/dimfot3/Realistic-LiDAR-Simulation-for-Indoor-Reconstruction-Human-Perception',
    tags: ['Simulation', '3D graphics', 'Robotics'],
    tech: ['C++', 'ROS2', 'Gazebo']
  },
  {
    id: 'vp-tree-knn',
    title: 'HPC-Optimized VP-Trees & Parallel KNN Search',
    desc: 'Sequential, OpenMP, and MPI+OpenMP implementations of VP-tree construction and KNN search with tests.',
    image: `${import.meta.env.BASE_URL}images/projects/knn_vnt.png`,
    demo: null,
    github: 'https://github.com/dimfot3/HPC-Optimized-VP-Trees-Parallel-KNN-Search',
    tags: ['Algorithms', 'Parallel'],
    tech: ['C', 'OpenMP', 'MPI', 'Python']
  },
  {
    id: 'cuda-ising',
    title: 'GPU-Accelerated Ising Model with CUDA',
    desc: 'GPU-accelerated Ising model with multiple kernels, benchmarking scripts, and optional Google Tests.',
    image: `${import.meta.env.BASE_URL}images/projects/ising.png`,
    demo: null,
    github: 'https://github.com/dimfot3/GPU-Accelerated-Ising-Model-with-CUDA',
    tags: ['HPC', 'GPU'],
    tech: ['CUDA', 'C/C++', 'CMake']
  },
  {
    id: 'constellation',
    title: 'Modulation Classification via Deep Learning',
    desc: 'A machine learning framework for "blind" modulation classification in digital communication systems using CNNs.',
    image: `${import.meta.env.BASE_URL}images/projects/constellation.jpg`,
    demo: null,
    github: 'https://github.com/dimfot3/Modulation-Classification-via-Deep-Learning',
    tags: ['Deep Learning', 'DSP', 'DNN'],
    tech: ['Python', 'C/C++', 'Pytorch']
  },
  {
    id: 'triangle-counting',
    title: 'High-Performance Triangle Counting in Large Graphs',
    desc: 'A·(A²) masked approach for triangle counting in sparse graphs using C (pthreads/OpenMP/OpenCilk) and Julia.',
    image: `${import.meta.env.BASE_URL}images/projects/triangle_counting.png`,
    demo: null,
    github: 'https://github.com/dimfot3/High-Performance-Triangle-Counting-in-Large-Graphs',
    tags: ['Graphs', 'Parallel'],
    tech: ['C', 'OpenMP', 'OpenCilk', 'Julia']
  },
  {
    id: 'deduplicator',
    title: 'C++ Concurrent File Deduplicator',
    desc: 'A high-performance C++20 utility designed to identify duplicate files across large-scale file systems using multi-threading.',
    image: `${import.meta.env.BASE_URL}images/projects/deduplication.png`,
    demo: null,
    github: 'https://github.com/dimfot3/CPP-Concurrent-File-Deduplicator',
    tags: ['File Systems', 'Parallelization', 'C++'],
    tech: ['C++', 'Threads']
  },
  {
    id: 'custom_mp3',
    title: 'Handcrafted MP3 Codec',
    desc: 'Implementation of an audio compression engine including MDCT, psychoacoustic modeling, and quantization.',
    image: `${import.meta.env.BASE_URL}images/projects/mp3.png`,
    demo: null,
    github: 'https://github.com/dimfot3/Audio-Compression-Handcrafted-MP3-Codec',
    tags: ['Audio', 'Codec', 'Signal Processing'],
    tech: ['Python']
  },
  {
    id: 'mpi-median',
    title: 'Recursive Median-Based Data Distribution with MPI',
    desc: 'Message Passing Interface project implementing distribution by median (Parallel Quickselect) for distributed systems.',
    image: `${import.meta.env.BASE_URL}images/projects/parallel_quickselect.jpg`,
    demo: null,
    github: 'https://github.com/dimfot3/MPI_Proj',
    tags: ['Distributed Computing', 'MPI'],
    tech: ['MPI', 'C/C++', 'CMake']
  },
  {
    id: 'workadu-csv-invoicer',
    title: 'Workadu CSV Invoicer',
    desc: 'Python utility to automate batch invoice creation and AADE MyData tax compliance via REST APIs.',
    image: `${import.meta.env.BASE_URL}images/projects/workadu_mydata.jpg`,
    demo: null,
    github: 'https://github.com/dimfot3/Workadu-CSV2MyData',
    tags: ['Automation', 'FinTech'],
    tech: ['Python', 'REST API']
  },
  {
    id: 'elorus-csv-invoicer',
    title: 'Elorus CSV Invoicer',
    desc: 'Utility to batch-create invoices in Elorus from CSV files with mapping, validation, and dry-run support.',
    image: `${import.meta.env.BASE_URL}images/projects/csv_elorus_mydata.png`,
    demo: null,
    github: 'https://github.com/dimfot3/Elorus-CSV2MyData',
    tags: ['Automation', 'FinTech'],
    tech: ['Python', 'REST API']
  }
];
