function AvatarLetter({ name, radius, size = 36 }) {
  let initials = '';
  const names = name.split(' ');
  if (names.length === 1) {
    initials = names[0].slice(0, 2).toUpperCase();
  } else if (names.length > 1) {
    initials = names[0].substring(0, 1).toUpperCase() + names[1].substring(0, 1).toUpperCase();
  }

  const styles = {
    color: 'white',
    backgroundColor: `#0095DF`,
    width: size,
    height: size,
    lineHeight: `${size}px`,
    borderRadius: radius ? `${radius}px` : '10px',
    fontSize: `100%`,
  };

  return (
    <div className="lettered-avatar-wrapper" style={styles} aria-label={name}>
      <div className="lettered-avatar">{initials}</div>
    </div>
  );
}

export default AvatarLetter;
