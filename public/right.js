function Right(props) {
  return (
    <>
      <aside>
        <PlusMinus section="right" handle={props.handle} />
        <div className="section">Article:{props.data.right}</div>
        <Data data={props.data} />
      </aside>
    </>
  );
}
