const StudiesSchedules = ({ user }: { user: User | undefined }) => {
  console.log('✔️  user:', user);
  return (
    <div
      style={{
        width: '59%',
        background: '#222121',
        marginRight: '15px',
        borderRadius: '10px',
      }}
    >
      <div style={{ fontWeight: 'bold', padding: '15px' }}>스케쥴</div>
    </div>
  );
};

export default StudiesSchedules;
