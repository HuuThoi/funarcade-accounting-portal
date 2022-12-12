import { selectCurencies } from 'app/redux/selectors';
import { Dispatch } from 'react';
import { useSelector } from 'react-redux';
import CommonSelect from '../common/CommonSelect';
import { StyledCurrencyMenuItem, Wrapper } from './style';

interface Props {
  currencyId?: number;
  setCurrencyId: Dispatch<React.SetStateAction<number | undefined>>;
}

const SelectCurrency = (props: Props) => {
  const currencies = useSelector(selectCurencies);
  const { currencyId = currencies[0]?.id || 0, setCurrencyId } = props;

  const onChange = (value: string) => {
    setCurrencyId(Number(value));
  };

  return (
    <Wrapper>
      <CommonSelect
        value={currencyId + ''}
        onChange={onChange}
        className="select_currency"
      >
        {currencies.map(x => (
          <StyledCurrencyMenuItem key={x.id} value={x.id}>
            {x.shortname}
          </StyledCurrencyMenuItem>
        ))}
      </CommonSelect>
    </Wrapper>
  );
};

export default SelectCurrency;
