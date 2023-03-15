import * as Styled from 'src/components/Loader/styles'
import { Triangle } from 'react-loader-spinner'

const Loader = () => {
  return (
    <Styled.LoaderContainer>
      <Triangle
        height="200"
        width="200"
        color="#eb8a44"
        ariaLabel="triangle-loading"
        wrapperStyle={{}}
        visible={true}
      />
    </Styled.LoaderContainer>
  )
}

export default Loader
