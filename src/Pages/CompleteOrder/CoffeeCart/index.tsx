import { RegularText } from "../../../Components/Header/Typography";
import { ActionsContainer, RemoveButton, CoffeeCardContainer } from "./style";
import { QuantityInput } from "../../../Components/QuantityInput";
import { Trash } from "phosphor-react";
import { useTheme } from "styled-components";
export function CoffeeCartCard() {
    const color = useTheme();
  return (
    <CoffeeCardContainer>
      <div>
        <img src="https://s3-alpha-sig.figma.com/img/55b1/f9ee/64600f98b2bae456b96fdc624c4b4f47?Expires=1681084800&Signature=FjKwqgZ3b6oiTyAf3QYYod6igvXhCEsfnPAnfsuCQcMU9Oc7dqFg3B5oYWukK9AWgAqgC95k3P3uOLr0WJgRSEPdl9-lP5ujGrrQZXhiva5KNbnhojgzgBKeXjE2g-o526uaSQp0dBI9xIWbSk9UkWGPgGw9fqgydehzXEMz-zNL3cQUZPECG~NDApHHaL32rD5UaATD4dX~AMq3baxA5m6BDJx32litpsBopER5rJ7AcVuDZcmvXdW6RirjI~7PYx5LNmmB2vE1lIp44QtGBml1z6YWL9-pIl-iTZAdq~ulPs5qGcOiEy9Fnlh2RjoIfOkNO76IQ7pmh-wej8vRtA__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4" />
        <div>
          <RegularText  size="s" color="subtitle" >Expresso Tradicional</RegularText>
          <ActionsContainer>
            <QuantityInput />
            <RemoveButton>
                
              <Trash size={20} color={color.colors["brand-purple-dark"]} />
              Remover
            </RemoveButton>
          </ActionsContainer>
        </div>
      </div>

      <p>R$:9,90</p>
    </CoffeeCardContainer>
  );
}
