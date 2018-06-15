
  *         <div style={styles.wrapper}>
  *           <label style={styles.label}>Gas Limit</label>
  *           <Input type="number" containerStyle={{width: '300px'}} value={this.state.gasLimit} onChange={this.onChangeGasLimit} />
  *           <div style={{...styles.balance, fontSize: '14px'}}>{this.props.txFee} {this.state.token}   /   {this.props.txFeeFiat} {this.props.currency}</div>
  *         </div>
