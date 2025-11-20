import React, { Component } from 'react';

export default class Class01 extends Component {
    shoot = () => {
        alert('Class형 컴포넌트 이벤트');
    };

	// 매개변수 추가
	shoot2 = (name) => {
		alert(`매개변수 있는 함수: ${name}`);
	}

    render() {
        return (
            <div>
                Class01
                <button onClick={this.shoot}>클릭</button>
				<br />
				
				<button onClick={() => this.shoot2('홍길동')}>매개변수 있는 함수</button>
				
            </div>
        );
    }
}
