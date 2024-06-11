const killcount = (counselors, jason) =>
  counselors.filter(counselor => counselor[1] < jason)
    .map(counselor => counselor[0]);
